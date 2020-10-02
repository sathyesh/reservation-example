import React, { useContext } from "react";
import { Box, Grid, Button, Link } from "@material-ui/core";
import { getTranslatedDateForIndex, getDateForIndex } from "../../helpers/Util";
import { LanguageContext } from "../../hooks/LanguageContext";

function Reservation({ regularHours, restaurantId }) {
  const { languageData } = useContext(LanguageContext);
  const RESERVATION_LINK = `https://r.gastronaut.ai/${restaurantId}`;

  return (
    <div>
      {regularHours &&
        regularHours.map((hour, index) => (
          <Box mt=".6rem" key={"Reservation" + index}>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid item xs={5}>
                {languageData !== null
                  ? getTranslatedDateForIndex(index, languageData)
                  : ""}
              </Grid>
              <Grid item xs={3} align="center">
                {hour === null
                  ? languageData !== null
                    ? languageData["closed"]
                    : "Closed"
                  : hour}
              </Grid>
              <Grid item xs={4} align="right">
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  style={{ textTransform: "capitalize" }}
                >
                  <Link
                    href= {`${RESERVATION_LINK}?`+getDateForIndex(index)}
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    {languageData !== null
                      ? languageData["reservationButtonSmall"]
                      : "Book A Table"}
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
    </div>
  );
}

export default Reservation;
