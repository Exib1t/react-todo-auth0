import React, { MouseEvent } from "react";
import Text from "../components/UI/Text";
import Page from "../components/UI/Page";
import Button from "../components/UI/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getToken } from "../store/reducers/userSlicer";
import { CircularProgress } from "@mui/material";

const HomePage = () => {
  const auth = useAuth0();
  const dispatch = useAppDispatch();

  function token() {
    dispatch(getToken({ auth }));
  }

  return (
    <Page id={"about"}>
      <Text align={"center"} margin={"0 0 25px"} line={"1.5"}>
        A React Todo-App is a web application that allows users to manage their
        tasks and to-do items. It is built using the React JavaScript library
        and may include features such as adding, deleting, and marking items as
        complete. It may also be designed to work on multiple devices.
      </Text>
      <Button onClick={token}>Token</Button>
    </Page>
  );
};

export default HomePage;
