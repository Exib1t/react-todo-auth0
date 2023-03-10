import React, { FC, useEffect } from "react";
import Task from "./Task";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getTodos } from "../store/reducers/todosSlicer";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import { ExpandMore } from "@mui/icons-material";
import { ThemeState } from "../store/reducers/themeSlicer";
import Text from "./UI/Text";

const TaskList: FC<Props> = ({
  type = TaskListType.all,
  defaultExpanded = true,
}) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.todos);
  const { theme } = useAppSelector((state) => state.theme);
  const auth = useAuth0();

  useEffect(() => {
    dispatch(getTodos({ auth }));
  }, []);

  return (
    <Accordion
      sx={{
        width: "100%",
        marginTop: "25px !important",
        background:
          theme === ThemeState.light
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(0, 0, 0, 0.3)",
      }}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Text size={16}>
          {type === TaskListType.all
            ? "All"
            : type === TaskListType.processing
            ? "In Progress"
            : "Completed"}
        </Text>
      </AccordionSummary>
      <AccordionDetails>
        <ul style={{ width: "100%" }}>
          {data?.map((data: any, index: number) => {
            switch (type) {
              case TaskListType.all:
                return <Task data={data} key={index} />;
              case TaskListType.processing:
                return !data.completed && <Task data={data} key={index} />;
              case TaskListType.completed:
                return data.completed && <Task data={data} key={index} />;
            }
          })}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default TaskList;

interface Props {
  type?: TaskListType;
  defaultExpanded?: boolean;
}

export enum TaskListType {
  all,
  processing,
  completed,
}
