import { useContext, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/header";
import Test from "./components/test/test";
import ThemeContext from "./context/ThemeContext";
import Projects from "./components/projects/projects";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="App" data-theme={theme}>
            <div className="container" >
                <Header />
                <Projects />
                <Test />
            </div>
            <div className="resolution">
                <p>Sorry, the resolution is not supported</p>
            </div>
        </div>
    );
}

export default App;
