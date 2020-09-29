import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Header/Header";
import ImageHolder from "./Components/ImageHolder/ImageHolder";
import {
  Container,
  Typography,
  CssBaseline,
  Grid,
  Button,
} from "@material-ui/core";

function App() {
  const src = "../poweredByGastronaut.png";

  return (
    <>
      <CssBaseline />
      <Container className="App" maxWidth="xs">
        <Typography
          component="div"
          style={{ backgroundColor: "#fff", height: "100vh" }}
        >
          <div className="App__Header">
            <Header />
          </div>
          <div className="App__ImageHolder">
            <ImageHolder src={src} />
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
        </Typography>
      </Container>
    </>
  );
}

export default App;
