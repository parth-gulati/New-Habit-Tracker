import { Grid, Button, Typography } from "@mui/material";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHabit, auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Tracker = () => {
  const trackerRef = useRef(null);
  const [authUser, loading] = useAuthState(auth);
  const [habits, setHabits] = useState([]);
  let navigate = useNavigate();

  const handleClick = (e) => {
    gsap.fromTo(
      trackerRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 1 }
    );
    setTimeout(() => {
      navigate("/new-habit");
    }, 1000);
  };

  useEffect(async () => {
    await getHabit(authUser).then((response) => {
      setHabits([...response]);
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      trackerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      ref={trackerRef}
      style={{ height: "80vh" }}
    >
      {habits.length === 0 && (
        <Grid item padding="1.5rem" paddingBottom="2rem">
          <Button variant="outlined" onClick={handleClick}>
            <Typography variant="h6" style={{ textTransform: "none" }}>
              Get Started - Track a habit
            </Typography>
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Tracker;
