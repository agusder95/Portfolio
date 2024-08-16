import React, { useContext } from "react";
import "./spinnerLoader.scss";
import ThemeContext from "../../../context/ThemeContext";

const SpinnerLoader = () => {
    const { theme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div className="spinnerLoaderWrapper" data-theme={theme}>
            <div className="spinnerLoader"></div>
        </div>
    );
};

export default SpinnerLoader;
