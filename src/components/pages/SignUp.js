import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
import { TextLoop } from "react-text-loop-next";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AnchorIcon from "@mui/icons-material/Anchor";
import CircularProgress from '@mui/material/CircularProgress';

//Toastr
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
  confirmPassword: yup
    .string()
    .required("Password confirmation required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const StyledDiv = styled(`div`)(({ theme }) => ({}));

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

export default function SignUp() {

  let navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      forgotPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSignUp(values);
    },
  });

  const handleSignUp = (values) => {
    setLoading(true)
    const authentication = getAuth();
    createUserWithEmailAndPassword(
      authentication,
      values.email,
      values.password
    )
      .then((response) => {
        setLoading(false)
        toast.success('User Registered Successfully', {autoClose: 2500})
        setTimeout(()=>{
          navigate('/tracker')
        }, 2500)
      })
      .catch((err) => {
        setLoading(false)
        if(err.message.includes('auth/email-already-in-use')){
        toast.error('Email Already In Use')
        }
      });
  };

  return (
    <StyledDiv>
      <form onSubmit={formik.handleSubmit}>
        <Grid alignItems="center" justifyContent="center" container>
          <Grid item>
            <StyledHeading variant="h3">Sign Up</StyledHeading>
          </Grid>
        </Grid>
        <Grid justifyContent="center" container>
          <Grid item xs={10} sm={8} md={5} lg={3}>
            <StyledPaper elevation={24} style={{ height: "100%" }}>
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
                <Grid item width="80%" style={{ marginTop: "1rem" }}>
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
                <Grid item width="80%" style={{ marginTop: "1rem" }}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  />
                </Grid>
                <Grid item style={{ marginTop: "3rem", width: "50%" }}>
                  <StyledButton type="submit" variant="contained">
{ !loading ? "Sign Up" :
                  <CircularProgress style={{maxWidth: '1.5rem', maxHeight: '1.5rem', opacity: 0.8}} color="secondary" />}
                  </StyledButton>
                </Grid>
                <Grid item style={{ marginTop: "1.5rem" }}>
                  <StyledLink
                    style={{ textDecoration: "none" }}
                    variant="body2"
                    component={Link}
                    to="/"
                  >
                    {"Already have an account? Sign in"}
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
