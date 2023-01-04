import React, { useEffect } from "react";
import Router from "./Router/Router";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from "./hooks/redux";
import { getToken } from "./store/reducers/userSlicer";
import { themeSlicer } from "./store/reducers/themeSlicer";

function App() {
  const auth = useAuth0();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let theme: string | null = localStorage.getItem("theme");
    if (theme) {
      dispatch(themeSlicer.actions.setTheme(theme));
    }
    dispatch(getToken({ auth }));
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
