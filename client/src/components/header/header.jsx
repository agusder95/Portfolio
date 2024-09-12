import React, { useContext, useState } from "react";
import "./styles.scss";
import ThemeContext from "../../context/ThemeContext";

import { IconContext } from "react-icons";
import { FaAdjust } from "react-icons/fa";
const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <header className="header" data-theme={theme}>
            <h1>Agustin De Robles</h1>
            <div className="switch">
                <div className="switch-input" onClick={handleChange}>
                    <IconContext.Provider
                        value={{ className: "react-icons", size: "100%" }}
                    >
                        <FaAdjust className="themebtn" theme-active={theme} />
                    </IconContext.Provider>
                </div>
            </div>
        </header>
    );
};

export default Header;
