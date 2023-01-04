import React, { FC } from "react";
import { StyledTask } from "./styled/StyledTask";
import Button from "./UI/Button";
import Text from "./UI/Text";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  cancelEdit,
  deleteTask,
  setEditableTask,
  toggleTask,
} from "../store/reducers/todosSlicer";
import { Cancel, Check, Clear, Edit, RemoveDone } from "@mui/icons-material";

interface Props {
  data: TaskData;
}

const Task: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const { editable } = useAppSelector((state) => state.todos);
  const { theme } = useAppSelector((state) => state.theme);
  function deleteHandle() {
    dispatch(deleteTask({ id: data.id }));
  }

  function toggleHandle() {
    dispatch(toggleTask({ data }));
  }

  function editHandle() {
    dispatch(setEditableTask({ data }));
  }

  function cancelEditHandle() {
    dispatch(cancelEdit());
  }

  return (
    <StyledTask completed={data.completed} theme={theme}>
      <Text size={20}>{data.text}</Text>
      <div style={{ display: "flex", gap: "10px" }}>
        {editable.data?.id === data.id ? (
          <Button padding={"3px 6px"} onClick={cancelEditHandle}>
            <Cancel fontSize={"small"} />
          </Button>
        ) : (
          <Button padding={"3px 6px"} onClick={editHandle}>
            <Edit fontSize={"small"} />
          </Button>
        )}
        {data.completed ? (
          <Button padding={"3px 6px"} onClick={toggleHandle}>
            <RemoveDone fontSize={"small"} />
          </Button>
        ) : (
          <Button padding={"3px 6px"} onClick={toggleHandle}>
            <Check fontSize={"small"} />
          </Button>
        )}
        <Button
          padding={"3px 6px"}
          onClick={deleteHandle}
          background={["rgba(255,0,0,0.6)", "rgba(255,0,0)"]}
        >
          <Clear fontSize={"small"} />
        </Button>
      </div>
    </StyledTask>
  );
};

export default Task;

export interface TaskData {
  text: string;
  id: number;
  userId: number;
  completed: boolean;
}
