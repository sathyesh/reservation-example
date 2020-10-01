import React from "react";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import "./Header.scss";

function Header({language, onLanguageChange, logo, link}) {

  return (
    <div>
      <header className="AppHeader">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="AppHeader__logo"
            src={logo}
            alt="logo"
          />
        </a>
        <div className="AppHeader__languageToggle">
          <LanguageToggle language={language} setlanguage={onLanguageChange} />
        </div>
      </header>
    </div>
  );
}

export default Header;
