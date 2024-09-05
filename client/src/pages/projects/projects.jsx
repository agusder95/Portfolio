import React, { useContext, useEffect, useState } from "react";
import "./projects.scss";
import FinishProjects from "../../components/finishProjects/finishProjects";
import ActualProjects from "../../components/actualProjects/actualProject";
import WidthContext from "../../context/widthContext";

const Projects = () => {
    const { width } = useContext(WidthContext);
    const [isMobile, setIsMobile] = useState(width > 1080);

    useEffect(() => {
        setIsMobile(width >= 768);
    }, [width]);
    return (
        <div className="projectsWrapper">
            <FinishProjects desktop={isMobile} />
            <ActualProjects desktop={isMobile} />
        </div>
    );
};

export default Projects;
