import React, { useContext, useState } from "react";
import "./styles.scss";
import ThemeContext from "../../context/ThemeContext";
import Switch from "@mui/material/Switch";

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = (event) => {
        setTheme(event.target.checked ? "dark" : "light");
    };

    return (
        <header className="header" data-theme={theme}>
            <h1>Theme Switcher</h1>
            <div className="switch">
                <p>Theme</p>
                <Switch
                    className="switch-input"
                    checked={theme === "dark" ? true : false}
                    onChange={handleChange}
                    color="primary"
                />
            </div>
        </header>
    );
};

export default Header;
