import React, { useContext } from "react";
import Header from "../components/header/header";
import ThemeContext from "../context/ThemeContext";
import "./layout.scss";
import Footer from "../components/footer/footer";
const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="layout" data-theme={theme}>
            <Header />
            <div className="mainContent">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
