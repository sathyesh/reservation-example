import React from 'react';
import { Link } from "@material-ui/core";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="AppFooter">
            <Link
            href="https://www.gastronaut.ai/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            >
                <img
                    className="AppHeader__logo"
                    src="/poweredByGastronaut.png"
                    alt="logo"
                />
            </Link>
        </footer>
    )
}

export default Footer
