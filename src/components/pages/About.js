import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkRed,
}));

const StyledParagraph = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
}));

const ParaGrid = styled(Grid)(({ theme }) => ({
  paddingBottom: "1rem",
}));

const About = () => {
  return (
    <Grid alignItems="center" justifyContent="center" container>
      <Grid item padding="1.5rem" paddingBottom="2rem">
        <StyledHeading variant="h3">About</StyledHeading>
      </Grid>
      <Grid justifyContent="center" container>
        <Grid item xs={10} sm={8} md={8} lg={7}>
          <ParaGrid item>
            <StyledParagraph variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              lobortis faucibus sapien eget ullamcorper. Donec tincidunt, tellus
              sed dignissim bibendum, elit eros scelerisque nulla, aliquet porta
              ante quam nec elit. Suspendisse viverra ligula a ex egestas,
              faucibus lacinia risus fringilla. Etiam egestas velit tortor,
              vitae lobortis magna consequat a. Nulla vestibulum eget augue at
              elementum. Duis porttitor mi sit amet libero pharetra, sed dictum
              ante hendrerit. Phasellus convallis, metus ac tincidunt sodales,
              diam eros placerat urna, facilisis pulvinar leo leo id leo.
            </StyledParagraph>
          </ParaGrid>
          <ParaGrid item>
            <StyledParagraph variant="body">
              Fusce volutpat nisl sed facilisis egestas. Ut id ipsum
              ullamcorper, pulvinar massa et, porttitor dolor. Phasellus ac
              justo condimentum, pellentesque odio in, fringilla ante. Nam
              egestas mauris finibus mattis rutrum. Sed vestibulum velit id nisl
              feugiat feugiat. Sed at lacus et dolor congue imperdiet. Nulla
              consectetur eleifend turpis, sit amet aliquam arcu maximus
              imperdiet. Integer condimentum tincidunt dictum. Sed blandit eros
              ut magna blandit, vel aliquet nulla finibus. Ut blandit eget erat
              eu aliquam. Maecenas nibh tellus, molestie a arcu vitae, efficitur
              imperdiet erat. Praesent porttitor, leo non laoreet porttitor,
              ligula nibh vestibulum magna, quis ullamcorper lorem ex ac eros.
              Duis scelerisque euismod vulputate. Quisque pharetra, velit non
              suscipit rutrum, lorem neque porttitor elit, fringilla mollis mi
              ligula quis eros. Check out my other projects&nbsp;
            </StyledParagraph>
            <StyledParagraph variant="body" component={Link} to="https://github.com/parth-gulati">here.</StyledParagraph>
            <ParaGrid item style={{marginTop: '3rem'}}>
                <StyledParagraph variant="body">
                    Regards,
                </StyledParagraph>
            </ParaGrid>
            <ParaGrid item>
                <Typography style={{fontFamily: 'BrothersideSignature'}} variant="h4">
                    Pattypan
                </Typography>
            </ParaGrid>
          </ParaGrid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
