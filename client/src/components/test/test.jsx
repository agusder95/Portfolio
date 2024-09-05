import React, { useContext } from "react";
import "./test.scss";
import ThemeContext from "../../context/ThemeContext";

const Test = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="test" data-theme={theme}>
            <h1>Test</h1>
            <h2>Hola Boludito</h2>
            <div className="test-child">
                <p>cara de pingo</p>
            </div>
        </div>
    );
};

export default Test;
