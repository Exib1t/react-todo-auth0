import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout";
import ProfilePage from "../pages/ProfilePage";
import { useAppSelector } from "../hooks/redux";
import AppPage from "../pages/AppPage";

const Router = () => {
  const { authenticated } = useAppSelector((state) => state.user);
  return (
    <div>
      <Routes>
        {authenticated ? (
          <Route path={"/"} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={"profile"} element={<ProfilePage />} />
            <Route path={"app"} element={<AppPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Route>
        ) : (
          <Route path={"/"} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default Router;
