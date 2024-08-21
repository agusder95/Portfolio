import React, { useContext } from "react";
import "./spinnerLoader.scss";
import ThemeContext from "../../../context/ThemeContext";

const SpinnerLoader = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="spinnerLoaderWrapper" data-theme={theme}>
            <div className="spinnerLoader"></div>
        </div>
    );
};

export default SpinnerLoader;
