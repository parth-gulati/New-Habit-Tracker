import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const StyledHeading = styled(Typography)(({theme})=>({
    color: theme.palette.common.darkRed
}))

const Profile = () => {
  return (
    <Grid alignItems="center" justifyContent="center" container>
      <Grid item padding="1.5rem" paddingBottom="2rem">
        <StyledHeading variant="h4">Complete Profile</StyledHeading>
      </Grid>
    </Grid>
  );
};

export default Profile;
