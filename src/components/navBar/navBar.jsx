import React, { useState } from "react";
import "./navBar.scss";
import { IconContext } from "react-icons";
import { HiHome, HiUser, HiTemplate, HiChip, HiChatAlt } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const handleClick = (event) => {
        navigate(`${event}`);
    };

    
    return (
        <div className="navBarWrapper">
            <IconContext.Provider
                value={{ className: "react-icons", size: "100%" }}
            >
                <HiHome
                    className={currentPath === "/" ? "active" : ""}
                    onClick={() => handleClick("/")}
                />
                <HiUser
                    className={currentPath === "resume" ? "active" : ""}
                    onClick={() => handleClick("/resume")}
                />
                <HiTemplate
                    className={currentPath === "projects" ? "active" : ""}
                    onClick={() => handleClick("/projects")}
                />
                <HiChip
                    className={currentPath === "skills" ? "active" : ""}
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
