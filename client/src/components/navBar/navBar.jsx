import React, { useContext, useState } from "react";
import "./navBar.scss";
import { IconContext } from "react-icons";
import { HiHome, HiUser, HiTemplate, HiChip, HiChatAlt } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const {theme} = useContext(ThemeContext);

    const handleClick = (event) => {
        navigate(`${event}`);
    };

    
    return (
        
        <div className="navBarWrapper" data-theme={theme}>
            <IconContext.Provider
                value={{ className: "react-icons", size: "100%", color:theme === "light" ? "#f5f3f0" : "#232121" }}
                data-theme={theme}
            >
                <HiHome
                    className={currentPath === "/" ? "active" : ""}
                    onClick={() => handleClick("/")}
                />
                <HiUser
                    className={currentPath === "/resume" ? "active" : ""}
                    onClick={() => handleClick("/resume")}
                />
                <HiTemplate
                    className={currentPath === "/projects" ? "active" : ""}
                    onClick={() => handleClick("/projects")}
                />
                <HiChip
                    className={currentPath === "/skills" ? "active" : ""}
                    onClick={() => handleClick("/skills")}
                />
                <HiChatAlt
                    className={currentPath === "/contact" ? "active" : ""}
                    onClick={() => handleClick("/contact")}
                />
            </IconContext.Provider>
        </div>
    );
};

export default NavBar;
