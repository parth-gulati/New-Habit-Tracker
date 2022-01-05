import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { TextLoop } from "react-text-loop-next";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const StyledDiv = styled(`div`)(({ theme }) => ({}));

const StyledLink = styled(Typography)(({theme})=>({
  color: theme.palette.common.red,
  '&:hover': {
    color: theme.palette.common.darkRed
  }
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
 
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item width="80%" style={{ marginTop: "2rem" }}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item style={{ marginTop: "3rem", width: "50%" }}>
                <StyledButton variant="contained">{"Sign In"}</StyledButton>
              </Grid>
              <Grid item style={{ marginTop: "1.5rem"}}>
                <StyledLink variant="body2" component={Link} to='/forgot-password'>{"Forgot Password?"}</StyledLink>
              </Grid>
            </Grid>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}
