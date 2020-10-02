import React, { useContext } from "react";
import { Box, Grid, Button, Link } from "@material-ui/core";
import { getTranslatedDateForDate } from "../../helpers/Util";
import { LanguageContext } from "../../hooks/LanguageContext";

function Events({ events }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div>
      {events &&
        events.map((eventItem, index) => (
          <Box my=".6rem" key={"Events" + index}>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid item xs={5}>
                {languageData !== null
                  ? getTranslatedDateForDate(eventItem.date, languageData)
                  : ""}
              </Grid>
              <Grid item xs={3} align="center">
                {eventItem.title}
              </Grid>
              <Grid item xs={4} align="right">
                {eventItem.available ? (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ textTransform: "capitalize" }}
                  >
                    <Link
                      href={eventItem.link}
                      color="inherit"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                    >
                      {languageData !== null
                        ? languageData["ticketButton"]
                        : "Buy Ticket"}
                    </Link>
                  </Button>
                ) : (
                  "Closed"
                )}
              </Grid>
            </Grid>
          </Box>
        ))}
    </div>
  );
}

export default Events;
