import React from "react";
import Text from "./UI/Text";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "../hooks/redux";

const Layout = () => {
  const { loading } = useAppSelector((state) => state.user);

  return (
    <>
      <Header />
      {loading && (
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          <CircularProgress />
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
