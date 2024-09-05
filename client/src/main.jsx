import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { WidthContextProvider } from "./context/widthContext.jsx";
import { TnCContextProvider } from "./context/t&cContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <WidthContextProvider>
                <TnCContextProvider>
                    <App />
                </TnCContextProvider>
            </WidthContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);
