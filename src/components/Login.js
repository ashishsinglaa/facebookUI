import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "./common/Button";

const Login = () => {
  return (
    <Box
      sx={{
        pt: 9,
      }}
    >
      <Grid
        container
        sx={{
          pt: 2.5,
          width: "980px",
          height: "536px",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <Grid item md={6.5}>
          <Box
            component="img"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            sx={{
              height: "106px",
              width: "301px",
              mt: "96px",
              ml: -3,
              mb: -1,
            }}
          ></Box>
          <Box sx={{ typography: "tagLine" }}>
            Facebook helps you connect and share with the people in your life.
          </Box>
        </Grid>
        <Grid
          sx={{
            mt: 5,
            height: "350px",
            width: "400px",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 2,
            p: 2,
          }}
          item
          xs={12}
          md={5}
        >
          <Box
            component="input"
            sx={{
              width: "100%",
              p: 2,
              "&::placeholder": {
                color: "#1d2129",
                fontSize: 17,
              },
              border: "1px solid",
              borderColor: "border.main",
              borderRadius: "6px",
              mb: 2,
            }}
            placeholder="Enter address or phone Number"
          />
          <Box
            component="input"
            sx={{
              width: "100%",
              p: 2,
              "&::placeholder": {
                color: "#1d2129",
                fontSize: 17,
              },
              border: "1px solid",
              borderColor: "border.main",
              borderRadius: "6px",
              mb: 2,
            }}
            placeholder="Password"
          />
          <Button width="100%" bgColor="button.primary">
            Log In
          </Button>
          <Box
            sx={{
              mt: 2,
              mb: 2,
              typography: "body2",
              textAlign: "center",
              color: "button.primary.main",
              fontWeight: 500,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Forgotten password?
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
