import React from "react";
import { Grid, Button, Link } from "@material-ui/core";

function Products({ data, languageData }) {
  return (
    <>
      {data &&
        data.map((product, index) => (
          <div className="App__Button" key={"product"+index}>
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
                    {product}
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
