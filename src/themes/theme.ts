import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#653cb4",
      light: "#FFFFFF",
      dark: "#4f4f4f",
    },
    secondary: {
      main: "#653cb4",
      light: "#FFFFFF",
      dark: "#4f4f4f",
    },
    success: green,
    warning: red,
  },
});
