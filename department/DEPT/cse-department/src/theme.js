import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9d1c24",
      dark: "#681118",
      light: "#c23640",
    },
    secondary: {
      main: "#e5a832",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f7fa",
    },
    text: {
      primary: "#222222",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
