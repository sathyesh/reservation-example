import React, { useState, useEffect } from "react";
import { Grid, Button, Link } from "@material-ui/core";
import {getDateForIndex} from "../../helpers/Util";

function Events({ events }) {
  const [datesTime, setDatesTime] = useState([]);
  
  useEffect(() => {
    const newDatesTime = regularHours && regularHours.map((hour, index) => ({
      date: getDateForIndex(index),
      time: hour,
    }));
    setDatesTime(newDatesTime?newDatesTime:[]);
  }, [regularHours]);

  return (
    <div>
      {datesTime.map((dateTime) => (
        <Grid container spacing={0}>
          <Grid item xs={4}>
            {dateTime.date}
          </Grid>
          <Grid item xs={4}>
            {dateTime.time}
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary">
              <Link
                href="#"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                Reserve
              </Link>
            </Button>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default Events;
