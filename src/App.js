import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ImageHolder from "./components/ImageHolder/ImageHolder";
import DateReservation from "./components/Reservation/Reservation";
import Products from "./components/Products/Products";

import {
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import useFetch from "./hooks/useFetch";
import { restaurantApi, languageApi } from "./services/api";
import LanguageToggle from "./components/LanguageToggle";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


import "./Styles/App.scss";

function App() {

  const [language, setLanguage] = useState("de");
  const [restaurantTheme, setRestaurantTheme] = useState({
    primaryColor: '#d0d0d0', 
    contrastText: '#000000'
  });
  
  const restaurantID = "neo-heidelberg";
  const [apiResponse, isApiLoading, apiError] = useFetch({
    api: restaurantApi,
    method: "get",
    url: restaurantID,
  });
  const [apiData, setApiData] = useState({});
  
  const [languageResponse, isLanguageLoading, languageError] = useFetch({
    api: languageApi,
    method: "get",
    url: language,
  });
  const [languageData, setLanguageData] = useState({});

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
       {
       apiError && apiError.message != null && (
              <Alert severity="error">{apiError.message}</Alert>
            )
       }
      { 
        isApiLoading ? <CircularProgress /> : 
        (
          <>
            <Container maxWidth="sm">
              <Typography component="div" className="App">
                {/* Header Section Start */}
                <div className="App__Header">
                  <Header
                    link={apiData.link}
                    logo={apiData.logo}
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
                  <ImageHolder src={apiData.image} />
                </div>
                <div className="App__Grid">
                  <DateReservation regularHours={apiData.regularHours}/>
                  <div>...</div>
                </div>
                <Products data={apiData.products} languageData={languageData}/>
                {/* Content Section End*/}
                {/* Footer Section Start */}
                <div className="App__Footer">
                  <Footer />
                </div>
                {/* Footer Section End */}
              </Typography>
            </Container>
          </>
        )
      }
    </ThemeProvider>
  );
}

export default App;
