import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#653cb4",
      light: "#ffffff",
      dark: "#eaeaea",
    },
    secondary: {
      main: "#653cb4",
      light: "#282828",
      dark: "#0c0c0c",
    },
    text: {
      primary: "#4f4f4f",
      secondary: "#d2d2d2",
    },
    divider: "#2bc234",
    warning: red,
  },
});
