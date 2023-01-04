import React, { useEffect } from "react";
import Router from "./Router/Router";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from "./hooks/redux";
import { getToken } from "./store/reducers/userSlicer";

function App() {
  const auth = useAuth0();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getToken({ auth }));
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
