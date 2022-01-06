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
  
  //icons
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
  import AnchorIcon from '@mui/icons-material/Anchor';
  
  
  const StyledDiv = styled(`div`)(({ theme }) => ({}));
  
  const ForgotPassword = styled(Typography)(({theme})=>({
    color: theme.palette.common.red + '90',
    '&:hover': {
      color: theme.palette.common.red
    },
    fontSize: '0.8rem',
    textDecoration: 'none',
  }))
  
  const StyledLink = styled(Typography)(({theme})=>({
    color: theme.palette.common.red,
    '&:hover': {
      color: theme.palette.common.darkRed
    }
  }))
  
  const StyledTypography = styled(Typography)(({theme})=>({
    fontSize: '1rem'
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
  
  export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    return (
      <StyledDiv>
        <Grid alignItems="center" justifyContent="center" container>
          <Grid item>
            <StyledHeading variant="h3">Sign Up</StyledHeading>
          </Grid>
        </Grid>
        <Grid justifyContent="center" container>
          <Grid item xs={10} sm={8} md={5} lg={3}>
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
                    <StyledTypography variant="h6" style={{ fontWeight: 300 }}>
                      Sign up for&nbsp;{" "}
                    </StyledTypography>
                    
                    <TextLoop interval={2000}>
                      <StyledTypography variant="h6" style={{ fontWeight: 300 }}>
                        {" "}
                        logging habits.{" "}
                      </StyledTypography>
                      <StyledTypography variant="h6" style={{ fontWeight: 300 }}>
                        {" "}
                        logging lifestyle.{" "}
                      </StyledTypography>
                      <StyledTypography variant="h6" style={{ fontWeight: 300 }}>
                        {" "}
                        logging wins.{" "}
                      </StyledTypography>
                    </TextLoop>&nbsp;
                    <TextLoop  interval={2000}>
                      <AnchorIcon style={{color: `#B11313`}}/>
                      <FavoriteBorderIcon style={{color: `#B11313`}}/>
                      <EmojiEventsIcon style={{color: `#B11313`}}/>
                    </TextLoop>
                  </div>
                </Grid>
                <Grid item>
                  <Typography variant="body2"></Typography>
                </Grid>
                <Grid item width="80%" style={{ marginTop: "2rem" }}>
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
                  <StyledButton variant="contained">{"Sign Up"}</StyledButton>
                </Grid>
                <Grid item style={{ marginTop: "1.5rem"}}>
                  <StyledLink style={{textDecoration: 'none'}} variant="body2" component={Link} to='/'>{"Already have an account? Sign in"}</StyledLink>
                </Grid>
              </Grid>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledDiv>
    );
  }
  