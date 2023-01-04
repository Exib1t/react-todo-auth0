import React, { MouseEvent } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./UI/Button";
import { loginUserAndRefreshToken, useAppDispatch } from "../hooks/redux";

const LoginButton = ({ align, size }: any) => {
  const auth = useAuth0();
  const dispatch = useAppDispatch();
  function onClickHandle(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    loginUserAndRefreshToken(dispatch, auth);
  }

  return (
    <Button type={"button"} onClick={onClickHandle} align={align} size={size}>
      Getting Started
    </Button>
  );
};

export default LoginButton;
