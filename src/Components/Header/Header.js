import React, { useState } from "react";
import LanguageToggle from "../LanguageToggle";
import "./Header.scss";

function Header() {
  const [language, setLanguage] = useState("en");
  return (
    <div>
      <header className="AppHeader">
        <a
          href="https://www.gastronaut.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="AppHeader__logo"
            src="/poweredByGastronaut.png"
            alt="logo"
          />
        </a>
        <div className="AppHeader__languageToggle">
          <LanguageToggle language={language} setlanguage={setLanguage} />
        </div>
      </header>
    </div>
  );
}

export default Header;
