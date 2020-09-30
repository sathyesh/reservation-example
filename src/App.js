import React, { useState, useEffect } from "react";
import "./Styles/App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ImageHolder from "./Components/ImageHolder/ImageHolder";
import { Container, Typography, Grid, Button,CircularProgress } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import useFetch from "./hooks/useFetch";
import { restaurantApi }  from "./services/api";


function App() {
  const [language, setLanguage] = useState("de");
  const [ response, isLoading, error ] = useFetch({
    api: restaurantApi,
    method: "get",
    url: "schillingroofbar",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      console.log(response);
      setData(response);
    }
  }, [response]);
  
  const handleLanguageChange = (language) => {
    console.log("Language", language);
    setLanguage(language);
  }

  return (
    <>
      {isLoading && <CircularProgress />}
      {error && error.name && error.name === "Error" && (
        <Alert severity="error">{error.message}</Alert>
      )}
      <Container maxWidth="sm">
        <Typography
          component="div"
          className="App"
          style={{ backgroundColor: "#fff", height: "100vh" }}
        >
          {/* Header Section Start */}
          <div className="App__Header">
            <Header language={ language } onLanguageChange={handleLanguageChange} />
          </div>
          {/* Header Section End */}
          {/* Content Section Start*/}
          <div className="App__ImageHolder">
            <ImageHolder src={data.image} />
          </div>
          <div className="App__Grid">
            <Grid container spacing={1}>
              <Grid item xs={4}>
                Grid1
              </Grid>
              <Grid item xs={4}>
                Grid1
              </Grid>
              <Grid item xs={4}>
                <Button variant="outlined" color="primary">
                  Primary
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                Grid1
              </Grid>
              <Grid item xs={4}>
                Grid1
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="primary">
                  Primary
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className="App__Button">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ minWidth: "100%" }}
                >
                  Primary
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className="App__Button">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ minWidth: "100%" }}
                >
                  Primary
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className="App__Button">
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ minWidth: "100%" }}
                >
                  Primary
                </Button>
              </Grid>
            </Grid>
          </div>
          {/* Content Section End*/}
          {/* Footer Section Start */}
          <div className="App__Footer">
            <Footer />
          </div>
          {/* Footer Section End */}
        </Typography>
      </Container>
    </>
  );
}

export default App;
