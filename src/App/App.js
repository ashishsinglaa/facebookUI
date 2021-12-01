import React from "react";
import Login from "../components/Login";
import Box from "@mui/material/Box";
import "./App.css";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          bgcolor: "background.main",
          margin: 0,
        }}
      >
        <Login />
      </Box>
    </ThemeProvider>
  );
};

export default App;
