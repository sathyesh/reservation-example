import React from 'react';
import "./Footer.scss";

function Footer() {
    return (
        <footer className="AppFooter">
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
        </footer>
    )
}

export default Footer
