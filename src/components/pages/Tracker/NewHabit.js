import { Grid, Button, Typography, TextField, ButtonGroup } from "@mui/material";
import theme from "../../ui/Theme";
import Fab from '@mui/material/Fab';
import { styled } from "@mui/system";

const StyledRoundButton = styled(Fab)(({theme})=>({
    marginRight: '2rem',
    [theme.breakpoints.down('md')]: {
        
    }
}))

const NewHabit = () => {
  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      direction="column"
    >
      <Grid item padding="1.5rem" paddingBottom="2rem">
        <Typography
          variant="h5"
          style={{ color: theme.palette.common.darkRed, textTransform: "none" }}
        >
          Track a new habit
        </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg="4" md="5" sm="8" xs="10">
          <Grid container direction="column">
            <form>
              <Grid item>
                <TextField fullWidth label="Name"></TextField>
              </Grid>
              <Grid item marginTop="1.5rem">
                  <Typography variant="body2">Color</Typography>
              </Grid>
              <Grid item marginTop="1rem"  alignItems="center" justifyContent="center">
                  <ButtonGroup width="100%">
                  <StyledRoundButton size="small" color="primary"> </StyledRoundButton>
                  <StyledRoundButton size="small" color="primary"> </StyledRoundButton>
                  <StyledRoundButton size="small" color="primary"> </StyledRoundButton>
                  <StyledRoundButton size="small" color="primary"> </StyledRoundButton>
                  <StyledRoundButton size="small" color="primary"> </StyledRoundButton>
                  <StyledRoundButton size="small" color="primary"> </StyledRoundButton>
                  <StyledRoundButton size="small" color="primary"> </StyledRoundButton>
                  <Fab size="small" color="primary" marginRight="0rem"> </Fab>
                  </ButtonGroup>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewHabit;
