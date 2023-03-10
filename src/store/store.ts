import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./reducers/userSlicer";
import todosSlicer from "./reducers/todosSlicer";
import themeSlicer from "./reducers/themeSlicer";

export const setupStore = () => {
  return configureStore({
    reducer: {
      user: userSlicer,
      todos: todosSlicer,
      theme: themeSlicer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type UserState = ReturnType<typeof userSlicer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
