import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const nordTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#81A1C1",
    },
    secondary: {
      main: "#5E81AC",
      contrastText: "#ECEFF4",
    },
    background: {
      default: "#2E3440",
      paper: "#3B4252",
    },
    text: {
      primary: "#ECEFF4",
      secondary: "#E5E9F0",
      disabled: "#D8DEE9",
    },
    error: {
      main: "#BF616A",
    },
    warning: {
      main: "#EBCB8B",
    },
    info: {
      main: "#8FBCBB",
    },
  },
  typography: {
    h2: {
      fontWeight: 800,
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={nordTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
