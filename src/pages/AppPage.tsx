import React, { FC } from "react";
import Page from "../components/UI/Page";
import Text from "../components/UI/Text";
import TaskControls from "../components/TaskControls";
import TaskList, { TaskListType } from "../components/TaskList";

interface Props {}

const AppPage: FC<Props> = () => {
  return (
    <Page>
      <Text>Todos</Text>
      <TaskControls />
      {/*process*/}
      <TaskList type={TaskListType.processing} />
      {/*completed*/}
      <TaskList type={TaskListType.completed} defaultExpanded={false} />
    </Page>
  );
};

export default AppPage;
