import React from "react";
import "./Header.scss";
import { Link } from "@material-ui/core";


function Header({logo, link, children}) {

  return (
    <div>
      <header className="AppHeader">
        <Link
          href={link}
          target="_blank"
          underline="none"
          rel="noopener noreferrer"
        >
          <img
            className="AppHeader__logo"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="AppHeader__languageToggle">
         {children}
        </div>
      </header>
    </div>
  );
}

export default Header;
