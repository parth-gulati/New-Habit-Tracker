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
import DatePicker from "@mui/lab/DatePicker";

const StyledRoundButton = styled(Fab)(
  ({ theme, colorCode, overrideMarginRight }) => ({
    backgroundColor: colorCode ? colorCode : theme.palette.common.red,
    "&.Mui-selected": {
      backgroundColor: colorCode
        ? colorCode + "BB"
        : theme.palette.common.darkRed,
    },
    "&:focused": {
      backgroundColor: colorCode
        ? colorCode + "BB"
        : theme.palette.common.darkRed,
    },
    "&:hover": {
      backgroundColor: colorCode
        ? colorCode + "BB"
        : theme.palette.common.darkRed,
    },
    marginRight: "2rem",
    [theme.breakpoints.down("md")]: {
      marginRight: overrideMarginRight ? overrideMarginRight : "1.5rem",
    },
  })
);

const BGButton = styled(Button)(({ theme }) => ({
  //yet to be filled
}));

const NewHabit = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [selectedDuration, setSelectedDuration] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [endDate, endDateChange] = useState("2018-01-01T00:00:00.000Z");
  const handleClick = (e, colorCode) => {
    console.log(colorCode);
    setSelectedColor(colorCode);
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
              <Grid item marginTop="1rem">
                <Typography variant="body2">Color</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup width="100%">
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#ca3d21");
                    }}
                    colorCode="#ca3d21"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#e48922");
                    }}
                    colorCode="#e48922"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#f4c00e");
                    }}
                    colorCode="#f4c00e"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#54a54d");
                    }}
                    colorCode="#54a54d"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#4998de");
                    }}
                    colorCode="#4998de"
                    size="small"
                    color="primary"
                    overrideMarginRight="0rem"
                  >
                    {" "}
                  </StyledRoundButton>
                </ButtonGroup>
              </Grid>
              <Grid item marginTop="1rem">
                <Typography variant="body2">Start</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup width="100%">
                  <BGButton
                    variant={selectedDay === 0 ? "contained" : "outlined"}
                    onClick={() => {
                      setSelectedDate(new Date());
                      setSelectedDay(0);
                    }}
                  >
                    A Week
                  </BGButton>
                  <BGButton
                    variant={selectedDay === 1 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedDate(date);
                      setSelectedDay(1);
                    }}
                  >
                    A Month
                  </BGButton>
                </ButtonGroup>
              </Grid>
              <Grid item marginTop="1rem">
                <Typography variant="body2">Duration</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup width="80%">
                  <BGButton
                    variant={selectedDuration === 1 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedDate(date);
                      setSelectedDuration(1);
                    }}
                  >
                    1 Month
                  </BGButton>
                  <BGButton
                    variant={selectedDuration === 2 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedDate(date);
                      setSelectedDuration(2);
                    }}
                  >
                    1 Year
                  </BGButton>
                  <BGButton
                    variant={selectedDuration === 3 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedDate(date);
                      setSelectedDuration(3);
                      setIsOpen(true)
                    }}
                  >
                    Custom
                  </BGButton>
                {/*DatePicker to be added*/}
                </ButtonGroup>
              </Grid>
              <Grid item marginTop="1rem">
                <Typography variant="body2">When</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup width="80%">
                  <BGButton
                    variant={selectedDuration === 1 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedDate(date);
                      setSelectedDuration(1);
                    }}
                  >
                    1 Month
                  </BGButton>
                  <BGButton
                    variant={selectedDuration === 2 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedDate(date);
                      setSelectedDuration(2);
                    }}
                  >
                    1 Year
                  </BGButton>
                  <BGButton
                    variant={selectedDuration === 3 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedDate(date);
                      setSelectedDuration(3);
                      setIsOpen(true)
                    }}
                  >
                    Custom
                  </BGButton>
                {/*DatePicker to be added*/}
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
