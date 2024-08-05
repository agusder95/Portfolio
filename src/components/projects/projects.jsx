import React from "react";
import "./styles.scss";

import ActualProject from "../actualProjects/actualProject";
import FinishProjects from "../finishProjects/finishProjects";
const Projects = () => {
    const [isLargeScreen, setIsLargeScreen] = React.useState(
        window.innerWidth > 1080
    );

    React.useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1080);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="projects">
            <FinishProjects desktop={isLargeScreen} />
            <ActualProject desktop={isLargeScreen} />
        </div>
    );
};

export default Projects;
