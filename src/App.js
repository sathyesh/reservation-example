import React, { useState, useEffect } from "react";
import "./Styles/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageHolder from "./components/ImageHolder/ImageHolder";
import {
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import useFetch from "./hooks/useFetch";
import { restaurantApi } from "./services/api";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  const [language, setLanguage] = useState("de");
  const restaurantID = "schillingroofbar";
  const [response, isLoading, error] = useFetch({
    api: restaurantApi,
    method: "get",
    url: restaurantID,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      console.log(response);
      setData(response);
    }
  }, [response]);


  return (
    <>
      {isLoading && <CircularProgress />}
      {error && error.message != null && (
        <Alert severity="error">{error.message}</Alert>
      )}
      <Container maxWidth="sm">
        <Typography component="div" className="App">
          {/* Header Section Start */}
          <div className="App__Header">
            <Header
              link={data.link}
              logo={data.logo}
            >
              <LanguageToggle 
                language={language}
                setLanguage={setLanguage}
               />
            </Header>
          </div>
          {/* Header Section End */}
          {/* Content Section Start*/}
          <div className="App__ImageHolder">
            <ImageHolder src={data.image} />
          </div>
          <div className="App__Grid">
            <Grid container spacing={0}>
              <Grid item xs={4}>
                Grid1Grid1Grid1Grid1Grid1Grid1Grid1Grid1
              </Grid>
              <Grid item xs={4}>
                Grid1
              </Grid>
              <Grid item xs={4} style={{ textAlign: "center" }}>
                <Button variant="outlined" color="primary">
                  Primary
                </Button>
              </Grid>
            </Grid>
            <div>...</div>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                Grid1
              </Grid>
              <Grid item xs={4}>
                Grid1
              </Grid>
              <Grid item xs={4} style={{ textAlign: "center" }}>
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
