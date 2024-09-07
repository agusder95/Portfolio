import React from "react";
import { PROJECTS } from "../../data/projects";
import "./actualProject.scss";
import Carousel from "../ux/carousel/carousel";
import Card from "../ux/card/card";

const ActualProjects = ({ desktop }) => {
    const actualProjects = PROJECTS.filter(
        (project) => project.finish === false
    );
    return (
        <section className="aProjects">
            <h2>Projects in Process</h2>
            <div
                className="projectsContainer"
                style={{ display: desktop ? "flex" : "block" }}
            >
                {desktop ? (
                    actualProjects.map((item) => {
                        return <Card key={item.id} data={item} />;
                    })
                ) : (
                    <Carousel>
                        {actualProjects.map((item) => {
                            return <Card key={item.id} data={item} />;
                        })}
                    </Carousel>
                )}
            </div>
        </section>
    );
};

export default ActualProjects;
