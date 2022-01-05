import { Grid, Typography, Paper} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledDiv = styled(`div`)(({ theme }) => ({
  
}));

const StyledHeading = styled(Typography)(({theme})=>({
    textAlign: 'center',
    marginTop: '1rem',
    color: theme.palette.common.darkRed
}))

const StyledPaper = styled(Paper)(({theme})=>({
  marginTop: '3rem',
  height: '30rem',
}))


export default function Login() {
  return (
    <StyledDiv>
      <Grid alignItems="center" justifyContent="center" container>
          <Grid item>
          <StyledHeading variant="h3">Login</StyledHeading>
          </Grid>
      </Grid>
      <Grid justifyContent="center" container>
          <Grid item xs={10} md={6} lg={4}>
          <StyledPaper elevation={24}>
            If I ran Like hell
          </StyledPaper>
          </Grid>
      </Grid>
      
    </StyledDiv>
  );
}
