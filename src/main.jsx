import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { WidthContextProvider } from "./context/widthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <WidthContextProvider>
                <App />
            </WidthContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);
