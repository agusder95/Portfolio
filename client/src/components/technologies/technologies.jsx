import React, { useContext, useEffect, useState } from "react";
import "./technologies.scss";
import { TECH } from "../../data/tech";
import MoreIcon from "../../assets/images/Mobile/more.png";
import LessIcon from "../../assets/images/Mobile/less.png";
import WidthContext from "../../context/widthContext";
import ThemeContext from "../../context/ThemeContext";

const Technologies = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [quantity, setQuantity] = useState();
    const [slice, setSlice] = useState(1);
    const { width } = useContext(WidthContext);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        // si es mobile filtra la cantidad de techImg que entran a lo ancho
        switch (true) {
            case window.innerWidth > 300 && window.innerWidth < 400:
                setQuantity(3);
                break;
            case window.innerWidth >= 400 && window.innerWidth < 500:
                setQuantity(4);
                break;
            case window.innerWidth >= 500 && window.innerWidth < 600:
                setQuantity(5);
                break;
            case window.innerWidth >= 600 && window.innerWidth < 700:
                setQuantity(6);
                break;
            default:
                setQuantity(7);
                break;
        }
    }, [width]);

    const handleShowMore = () => {
        if (TECH.length / quantity > slice) {
            setSlice((prev) => prev + 1);
        } else {
            setSlice(1);
        }
    };

    return (
        <section className="techWrapper">
            <h2>Technologies</h2>

            <ul style={{ height: isMobile ? `${slice * 100}px` : "100%" }}>
                {TECH.map((tech) => (
                    <li key={tech.id}>
                        <div className="techImg" data-theme={theme}>
                            <img src={tech.img} alt={tech.title} />
                            <p className="textTech">{tech.title}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div
                className="moreTech"
                style={{ display: isMobile ? "flex" : "none" }}
            >
                <div className="moreTechIcon" onClick={handleShowMore}>
                    {TECH.length / quantity > slice ? (
                        <img src={MoreIcon} alt="MoreIcn" />
                    ) : (
                        <img src={LessIcon} alt="LessIcn" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
