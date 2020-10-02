import React, { useState, useEffect, useContext } from "react";
import { Grid, Button, Link } from "@material-ui/core";
import { getDateForIndex } from "../../helpers/Util";
import { LanguageContext } from "../../hooks/LanguageContext";


function Reservation({ regularHours }) {
  const [datesTime, setDatesTime] = useState([]);
  const languageTranslation = useContext(LanguageContext);

  useEffect(() => {
    const newDatesTime =
      regularHours &&
      regularHours.map((hour, index) => ({
        date: getDateForIndex(index),
        time: hour,
      }));
    setDatesTime(newDatesTime ? newDatesTime : []);
  }, [regularHours]);

  return (
    <div>
      {datesTime.map((dateTime, index) => (
        <Grid container spacing={0} key={'Reservation'+index}>
          <Grid item xs={5}>
            {dateTime.date}
          </Grid>
          <Grid item xs={3}>
            {dateTime.time}
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Button variant="outlined" color="primary">
              <Link
                href="#"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                {languageTranslation !==null?languageTranslation["reservationButtonSmall"]:"Reserve"}
              </Link>
            </Button>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default Reservation;
