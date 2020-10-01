import React from "react";
import "./Header.scss";

function Header({logo, link, children}) {

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
         {children}
        </div>
      </header>
    </div>
  );
}

export default Header;
