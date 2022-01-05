import { Grid, Typography, Paper, TextField } from "@mui/material";
import { TextLoop } from "react-text-loop-next";
import { styled } from "@mui/system";
import React from "react";

const StyledDiv = styled(`div`)(({ theme }) => ({}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.common.red,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.common.red + `95`,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.common.red,
    },
  },
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginTop: "1rem",
  color: theme.palette.common.darkRed,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: "3rem",
  height: "30rem",
}));

export default function Login() {
  return (
    <StyledDiv>
      <Grid alignItems="center" justifyContent="center" container>
        <Grid item>
          <StyledHeading variant="h3">Login</StyledHeading>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <StyledPaper elevation={24}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid style={{ marginTop: "50px" }} xs={4} item>
                <div style={{ display: "flex" }}>
                  <Typography variant="h6" style={{ fontWeight: 300 }}>
                    Sign in for&nbsp;{" "}
                  </Typography>
                  <TextLoop>
                    <Typography variant="h6" style={{ fontWeight: 300 }}>
                      {" "}
                      logging habits.{" "}
                    </Typography>
                    <Typography variant="h6" style={{ fontWeight: 300 }}>
                      {" "}
                      logging lifestyle.{" "}
                    </Typography>
                    <Typography variant="h6" style={{ fontWeight: 300 }}>
                      {" "}
                      logging wins.{" "}
                    </Typography>
                  </TextLoop>
                </div>
              </Grid>
              <Grid item width="80%" style={{ marginTop: "3rem" }}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item width="80%" style={{ marginTop: "2rem" }}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}
