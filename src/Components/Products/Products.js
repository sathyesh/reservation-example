import React, { useState, useEffect, useContext } from "react";
import { Grid, Button, Link } from "@material-ui/core";
import { LanguageContext } from "../../hooks/LanguageContext";

function Products({ data, restaurantId }) {
  const { languageData } = useContext(LanguageContext);
  const [dataWithLink, setDataWithLink] = useState([]);
  
  useEffect(() => {
    const LINKFORBUTTON = {
      reservation: `https://r.gastronaut.ai/${restaurantId}`,
      voucher: `https://v.gastronaut.ai/${restaurantId}`,
      menu: `https://menu.gastronaut.ai/${restaurantId}`,
    };
    const newDataWithLink = data.map((item) => {
      return {
        product: item,
        link: LINKFORBUTTON[item],
      };
    });
    setDataWithLink(newDataWithLink);
  },[setDataWithLink,data,restaurantId]);

  return (
    <>
      {dataWithLink.length > 0 &&
        dataWithLink.map((data, index) => (
          <div className="App__Button" key={"product" + index}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ minWidth: "100%" }}
                >
                  <Link
                    href={data.link}
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    {languageData !== null
                      ? languageData[data.product + "Button"]
                      : data.product}
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
