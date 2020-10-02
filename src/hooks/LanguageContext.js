import React, { createContext } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({language, children}) => {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

