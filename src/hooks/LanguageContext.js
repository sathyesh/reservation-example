import React, { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({language, languageData, children}) => {
  return (
    <LanguageContext.Provider value={{language,languageData}}>
      {children}
    </LanguageContext.Provider>
  );
};

