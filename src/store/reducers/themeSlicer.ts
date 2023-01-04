import { createSlice } from "@reduxjs/toolkit";

export enum ThemeState {
  light = "light",
  dark = "dark",
}

const initialState: ThemeStateType = {
  theme: ThemeState.light,
};

export const themeSlicer = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme(state) {
      state.theme =
        state.theme === ThemeState.light ? ThemeState.dark : ThemeState.light;
      localStorage.setItem("theme", state.theme);
    },
    setTheme(state, action: { type: string; payload: ThemeState | string }) {
      state.theme = action.payload;
    },
  },
});

interface ThemeStateType {
  theme: ThemeState | string;
}

export default themeSlicer.reducer;
