import React, { FC } from "react";
import Page from "../components/UI/Page";
import Text from "../components/UI/Text";
import TaskControls from "../components/TaskControls";
import TaskList, { TaskListType } from "../components/TaskList";
import Button from "../components/UI/Button";
import { themeSlicer } from "../store/reducers/themeSlicer";
import { useAppDispatch } from "../hooks/redux";

interface Props {}

const AppPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  function toggleTheme() {
    dispatch(themeSlicer.actions.toggleTheme());
  }

  return (
    <Page>
      <Text>Todos</Text>
      <TaskControls />
      <TaskList type={TaskListType.processing} />
      <TaskList type={TaskListType.completed} defaultExpanded={false} />
      <Button onClick={toggleTheme} margin={"50px 0 0"}>
        Toggle Theme
      </Button>
    </Page>
  );
};

export default AppPage;
