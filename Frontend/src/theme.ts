import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
      paper: "#1f1f1f",
    },
    primary: {
      main: "#646cff",
    },
    secondary: {
      main: "#535bf2",
    },
  },
});

export default theme;
