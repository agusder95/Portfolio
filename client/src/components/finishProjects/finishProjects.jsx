import React from "react";
import Carousel from "../ux/carousel/carousel";
import Card from "../ux/card/card";
import { PROJECTS } from "../../data/projects";
import "./finishProjects.scss";
const FinishProjects = ({ desktop }) => {
    const finishProjects = PROJECTS.filter(
        (project) => project.finish === true
    );
    return (
        <section className="fProjects">
            <h2>Finished Projects</h2>
            <div
                className="projectsContainer"
                style={{ display: desktop ? "flex" : "block" }}
            >
                {desktop ? (
                    finishProjects.map((item) => {
                        return <Card key={item.id} data={item} />;
                    })
                ) : (
                    <Carousel>
                        {finishProjects.map((item) => {
                            return <Card key={item.id} data={item} />;
                        })}
                    </Carousel>
                )}
            </div>
        </section>
    );
};

export default FinishProjects;
