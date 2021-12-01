import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      main: "#f0f2f5",
    },
    button: {
      primary: {
        main: "#1877f2",
        dark: "#166fe5",
      },
      secondary: {
        main: "#42b72a",
        dark: "#36a420",
      },
    },
    border: {
      main: "#dddfe2",
    },
  },
  typography: {
    tagLine: {
      fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
      fontSize: "28px",
      fontWeight: "normal",
      lineHeight: "32px",
    },
    fontSizeBtn: "20px",
    fontWeightBtn: "700",
  },
});

export default theme;
