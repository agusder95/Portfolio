import React, { useContext, useEffect, useRef, useState } from "react";
import "./technologies.scss";
import { TECH } from "../../data/tech";
import MoreIcon from "../../assets/images/Mobile/more.png";
import LessIcon from "../../assets/images/Mobile/less.png";
import WidthContext from "../../context/widthContext";
import ThemeContext from "../../context/ThemeContext";

const Technologies = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [quantity, setQuantity] = useState();
    const [visibleCount, setVisibleCount] = useState();
    const { width } = useContext(WidthContext);
    const { theme } = useContext(ThemeContext);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        // si es mobile filtra la cantidad de techImg que entran a lo ancho
        switch (true) {
            case window.innerWidth > 300 && window.innerWidth < 400:
                setQuantity(4);
                setVisibleCount(4);
                break;
            case window.innerWidth >= 400 && window.innerWidth < 530:
                setQuantity(6);
                setVisibleCount(6);
                break;
            case window.innerWidth >= 530 && window.innerWidth < 655:
                setQuantity(8);
                setVisibleCount(8);
                break;
            case window.innerWidth >= 655 && window.innerWidth < 768:
                setQuantity(10);
                setVisibleCount(10);
                break;
            default:
                setQuantity(TECH.length);
                setVisibleCount(TECH.length);
                break;
        }
    }, [width]);


    const handleShowMore = () => {
        
        if(TECH.length > quantity){
            setQuantity((prev) => prev + visibleCount);
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }else{
            setQuantity(visibleCount);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    };

    return (
        <section className="techWrapper" >

            <ul style={{ height: "100%" }} >
                {TECH.slice(0, quantity).map((tech) => (
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
                ref={scrollRef}
                style={{ display: isMobile ? "flex" : "none" }}
            >
                <div className="moreTechIcon" onClick={handleShowMore}>
                    {TECH.length / quantity > 1 ? (
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
