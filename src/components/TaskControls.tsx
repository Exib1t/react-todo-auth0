import React, { useState, MouseEvent, useRef, useEffect } from "react";
import { StyledForm, StyledInput, StyledLabel } from "./styled/StyledForm";
import Button from "./UI/Button";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { postTask, saveTask } from "../store/reducers/todosSlicer";
import { useAuth0 } from "@auth0/auth0-react";

const TaskControls = () => {
  const dispatch = useAppDispatch();
  const auth = useAuth0();
  const initialTaskState = {
    id: Date.now(),
    text: "",
    completed: false,
    userId: 1,
  };
  const { editable } = useAppSelector((state) => state.todos);
  const { theme } = useAppSelector((state) => state.theme);
  const [task, setTask] = useState<TaskType>(initialTaskState);
  const [editTaskText, setEditTaskText] = useState<string>("");

  function onSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(postTask({ data: task, auth }));
    taskReset();
  }

  function onSave(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(saveTask({ data: { ...editable.data, text: editTaskText } }));
  }

  function taskReset() {
    setTask(initialTaskState);
  }

  useEffect(() => {
    if (editable.data) {
      setEditTaskText(editable.data.text);
    }
  }, [editable.data]);

  return (
    <StyledForm>
      <StyledLabel>
        {editable.state ? (
          <StyledInput
            theme={theme}
            placeholder={"Task text"}
            value={editTaskText}
            onChange={(e) => setEditTaskText(e.target.value)}
          />
        ) : (
          <StyledInput
            theme={theme}
            placeholder={"Task text"}
            value={task.text}
            onChange={(e) => {
              setTask((prevState) => ({ ...prevState, text: e.target.value }));
            }}
          />
        )}
      </StyledLabel>
      {editable.state ? (
        <Button type={"submit"} onClick={onSave}>
          Save
        </Button>
      ) : (
        <Button type={"submit"} onClick={onSubmit}>
          Add
        </Button>
      )}
    </StyledForm>
  );
};

export default TaskControls;

export interface TaskType {
  id: number;
  text: string;
  completed: boolean;
  userId: number | string | undefined;
}
