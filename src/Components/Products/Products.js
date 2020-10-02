import React, { useContext } from "react";
import { Grid, Button, Link } from "@material-ui/core";
import { LanguageContext } from "../../hooks/LanguageContext";

function Products({ data }) {
  const languageTranslation = useContext(LanguageContext);
  return (
    <>
      {data &&
        data.map((product, index) => (
          <div className="App__Button" key={"product" + index}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ minWidth: "100%" }}
                >
                  <Link
                    href="#"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    {languageTranslation !==null?languageTranslation[product+"Button"]:product}
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </div>
        ))}
    </>
  );
}

export default Products;
