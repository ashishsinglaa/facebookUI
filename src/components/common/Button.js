import React from "react";
import { Box } from "@mui/material";

const Button = ({ bgColor, width, children }) => {
  return (
    <Box
      component="button"
      sx={{
        bgcolor: `${bgColor}.main`,
        border: "2px solid",
        borderColor: `${bgColor}.main`,
        width: width,
        height: "48px",
        borderRadius: 1,
        boxShadow: 0,
        color: "common.white",
        fontSize: "fontSizeBtn",
        fontWeight: "fontWeightBtn",
        "&:hover": {
          bgcolor: `${bgColor}.dark`,
          borderColor: `${bgColor}.dark`,
          cursor: "pointer",
        },
      }}
      disableElevation
    >
      {children}
    </Box>
  );
};

export default Button;
