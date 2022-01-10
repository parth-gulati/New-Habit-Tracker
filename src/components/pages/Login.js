import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
import { TextLoop } from "react-text-loop-next";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import CircularProgress from '@mui/material/CircularProgress';

//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AnchorIcon from "@mui/icons-material/Anchor";

//Toastr
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth, useFirebase} from '../../firebase'

//Formik Validation
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const StyledDiv = styled(`div`)(({ theme }) => ({}));

const ForgotPassword = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.red + "90",
  "&:hover": {
    color: theme.palette.common.red,
  },
  fontSize: "0.8rem",
  textDecoration: "none",
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.red,
  "&:hover": {
    color: theme.palette.common.darkRed,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({}));

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
  height: "100%",
}));

export default function Login() {

  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSignIn(values)
    },
  });

  const handleSignIn = (values) => {
    setLoading(true)
    auth.signInWithEmailAndPassword(
      values.email,
      values.password
    )
      .then((response) => {
        setLoading(false)
        toast.success('Logged In Successfully')
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
        if(err.message.includes('auth/wrong-password')){
        toast.error('Password is incorrect')
        }else if(err.message.includes('auth/user-not-found')){
          toast.error('User not found')
        }else{
          toast.error('Unexpected error has occured')
        }
      });
  };

  return (
    <StyledDiv>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <Grid alignItems="center" justifyContent="center" container>
          <Grid item>
            <StyledHeading variant="h3">Login</StyledHeading>
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
                      Sign in for&nbsp;{" "}
                    </StyledTypography>
                    <TextLoop interval={2000}>
                      <StyledTypography
                        variant="h6"
                        style={{ fontWeight: 300 }}
                      >
                        {" "}
                        logging habits.{" "}
                      </StyledTypography>
                      <StyledTypography
                        variant="h6"
                        style={{ fontWeight: 300 }}
                      >
                        {" "}
                        logging lifestyle.{" "}
                      </StyledTypography>
                      <StyledTypography
                        variant="h6"
                        style={{ fontWeight: 300 }}
                      >
                        {" "}
                        logging wins.{" "}
                      </StyledTypography>
                    </TextLoop>
                    &nbsp;
                    <TextLoop interval={2000}>
                      <AnchorIcon style={{ color: `#B11313` }} />
                      <FavoriteBorderIcon style={{ color: `#B11313` }} />
                      <EmojiEventsIcon style={{ color: `#B11313` }} />
                    </TextLoop>
                  </div>
                </Grid>
                <Grid item>
                  <Typography variant="body2"></Typography>
                </Grid>
                <Grid item width="80%" style={{ marginTop: "2rem" }}>
                  <StyledTextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item width="80%" style={{ marginTop: "2rem" }}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: "1rem",
                    width: "80%",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <ForgotPassword
                    variant="body2"
                    component={Link}
                    to="/forgot-password"
                  >
                    {"Forgot Password?"}
                  </ForgotPassword>
                </Grid>
                <Grid item style={{ marginTop: "3rem", width: "50%" }}>
                  <StyledButton type="submit" variant="contained">
                  { !loading ? "Sign In" :
                  <CircularProgress style={{maxWidth: '1.5rem', maxHeight: '1.5rem', opacity: 0.8}} color="secondary" />}
                    </StyledButton>
                </Grid>
                <Grid item style={{ marginTop: "1.5rem" }}>
                  <StyledLink
                    style={{ textDecoration: "none" }}
                    variant="body2"
                    component={Link}
                    to="/signup"
                  >
                    {"Noobie? Sign up"}
                  </StyledLink>
                </Grid>
              </Grid>
            </StyledPaper>
          </Grid>
        </Grid>
      </form>
    </StyledDiv>
  );
}
