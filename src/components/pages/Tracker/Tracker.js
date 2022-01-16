import { Grid, Button, Typography } from "@mui/material";
import {gsap} from "gsap";
import { useNavigate } from "react-router-dom";

const Tracker = () => {

  
  let navigate = useNavigate();
  const handleClick = ({currentTarget}) =>{
    gsap.fromTo(currentTarget, {opacity: 1}, {opacity: 0, duration: 1})
    setTimeout(()=>{
      navigate('/new-habit')
    }, 1000)
  }

  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      style={{ height: "80vh" }}
    >
      <Grid item padding="1.5rem" paddingBottom="2rem">
        <Button variant="outlined" onClick={handleClick}>
          <Typography variant="h6" style={{textTransform: 'none'}}>Get Started - Track a habit</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Tracker;
