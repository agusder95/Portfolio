import React from "react";
import "./home.scss";

const Home = () => {
    return (
        <div className="homeWrapper">
            <div className="homeSectionText">
                <div className="homeTitle">
                    <h1>FRONT-END<br /> DEVELOPER</h1>
                    <p className="tag">JUNIOR</p>
                </div>
                <div className="textContainer">
                    <p>
                        Hi there! <br /> I'm Agustin, a 28-year-old ambitious
                        junior front-end developer with a passion for creating
                        sleek, user-friendly interfaces. I specialize in
                        building responsive, high-performance web applications
                        using modern technologies like React and Vite.
                    </p>
                    <p>
                        I'm always looking for new challenges and aim to learn
                        something new every day while continuously improving my
                        skills. With a keen eye for design and a focus on
                        seamless user experiences, I can quickly analyze
                        problems and solve them, both independently and as part
                        of a team
                    </p>
                </div>
            </div>
            <div className="homeSectionText">
                <div className="homeImg">
                    <img src="https://placehold.co/600x900/png" alt="MyPhoto" />
                </div>
            </div>
        </div>
    );
};

export default Home;
