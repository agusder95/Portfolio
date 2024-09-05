import React, { useContext } from "react";
import Header from "../components/header/header";
import ThemeContext from "../context/ThemeContext";
import "./layout.scss";
import Footer from "../components/footer/footer";
import NavBar from "../components/navBar/navBar";
const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="layout" data-theme={theme}>
            <Header />
            <NavBar />
            <div className="mainContent">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
