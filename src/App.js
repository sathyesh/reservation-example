import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageHolder from "./components/ImageHolder/ImageHolder";
import Reservation from "./components/Reservation/Reservation";
import Events from "./components/Events/Events";
import Products from "./components/Products/Products";
import LanguageToggle from "./components/LanguageToggle";
//Material UI components
import { Container, Typography, CircularProgress, CssBaseline } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
//Backend Services
import { restaurantApi, languageApi } from "./services/api";
import useFetch from "./hooks/useFetch";
//Themes and Styles
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./Styles/App.scss";
//Language Translations
import { LanguageContextProvider } from "./hooks/LanguageContext";

function App() {
  const [language, setLanguage] = useState("de");
  const [restaurantTheme, setRestaurantTheme] = useState({
    primaryColor: "#d0d0d0",
    contrastText: "#000000",
  });

  const restaurantID = "neo-heidelberg";
  const [apiResponse, apiError, isApiLoading] = useFetch({
    api: restaurantApi,
    method: "get",
    url: restaurantID,
  });
  const [apiData, setApiData] = useState(null);

  const [languageResponse] = useFetch({
    api: languageApi,
    method: "get",
    url: language,
  });
  const [languageData, setLanguageData] = useState(null);

  useEffect(() => {
    if (languageResponse !== null) {
      setLanguageData(languageResponse);
      console.log(languageResponse);
    }
  }, [languageResponse]);

  useEffect(() => {
    if (apiResponse !== null) {
      setApiData(apiResponse);
    }
  }, [apiResponse]);

  useEffect(() => {
    if (apiData && apiData.colorPalette) {
      setRestaurantTheme(apiData.colorPalette);
    }
  }, [apiData]);

  return (
    <ThemeProvider theme={theme(restaurantTheme)}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Typography component="div" className="App">
          {apiError && apiError.message ? (
            <div className="App__Error">
              <Alert severity="error">{apiError.message}</Alert>
            </div>
          ) : isApiLoading ? (
            <div className="App__Loader">
              <CircularProgress />
            </div>
          ) : (
            <>
              {/* Header Section Start */}
              <div className="App__Header">
                <Header link={apiData.link} logo={apiData.logo}>
                  <LanguageToggle
                    language={language}
                    setLanguage={setLanguage}
                  />
                </Header>
              </div>
              {/* Header Section End */}
              {/* Content Section Start*/}
              <div className="App__ImageHolder">
                <ImageHolder src={apiData.image} />
              </div>
              <LanguageContextProvider language={language} languageData={languageData}>
                <div className="App__Grid">
                  <Reservation regularHours={apiData.regularHours} />
                  <div>...</div>
                  <Events events={apiData.events} />
                </div>
                <Products data={apiData.products} />
              </LanguageContextProvider>
              {/* Content Section End*/}
              {/* Footer Section Start */}
              <div className="App__Footer">
                <Footer />
              </div>
              {/* Footer Section End */}
            </>
          )}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
