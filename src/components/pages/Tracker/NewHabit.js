import {
  Grid,
  Button,
  Typography,
  TextField,
  ButtonGroup,
} from "@mui/material";
import theme from "../../ui/Theme";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/system";
import { useState } from "react";
import ReactCircleColorPicker from "react-circle-color-picker";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledRoundButton = styled(Fab)(({ theme }) => ({
  marginRight: "2rem",
  [theme.breakpoints.down("md")]: {},
}));

let colors = [
  {
    hex: "#F00314",
    selected: true,
  },
  {
    hex: "#FF8019",
    selected: false,
  },
  {
    hex: "#FAE603",
    selected: false,
  },
  {
    hex: "#28E10A",
    selected: false,
  },
  {
    hex: "#3BB5FF",
    selected: false,
  },
  {
    hex: "#0500C7",
    selected: false,
  },
  {
    hex: "#5C03FA",
    selected: false,
  },
  {
    hex: "#DE00ED",
    selected: false,
  },
];

const NewHabit = () => {
  const [prevColor, setPrevColor] = useState(colors);
  const [currentColor, setCurrentColor] = useState(colors);
  const aintSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const handleColorChange = (newColors) => {
    console.log(newColors)
    setPrevColor(...newColors)
  };
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
              <Grid item marginTop="2rem">
                <Typography
                  variant="body2"
                  style={{ fontWeight: 500, fontSize: "1rem" }}
                >
                  Color
                </Typography>
              </Grid>
              <Grid
                container
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ReactCircleColorPicker
                  colors={currentColor}
                  circleSpacing={aintSmall ? 13 : 6}
                  onChange={handleColorChange}
                  onClick={(e)=>{console.log(e)}}
                />
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewHabit;
