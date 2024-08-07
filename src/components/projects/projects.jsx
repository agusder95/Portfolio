import React, { useContext, useState } from "react";
import "./styles.scss";

import ActualProject from "../actualProjects/actualProject";
import FinishProjects from "../finishProjects/finishProjects";
import WidthContext from "../../context/widthContext";

const Projects = () => {
    const [isLargeScreen, setIsLargeScreen] = useState();
    const { width } = useContext(WidthContext);

    React.useEffect(() => {
        setIsLargeScreen(width > 1080);
    }, [width]);

    return (
        <div className="projects">
            <FinishProjects desktop={isLargeScreen} />
            <ActualProject desktop={isLargeScreen} />
        </div>
    );
};

export default Projects;
