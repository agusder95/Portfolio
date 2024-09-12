import React, { useEffect, useRef, useState } from "react";
import "./card.scss";
const Card = ({ data }) => {
    const item = data;
    const [showButtons, setShowButtons] = useState(false);
    const cardRef = useRef(null);
    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    const handleShow = () => {
        setShowButtons(!showButtons);
    };

    const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setShowButtons(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="cardWrapper"
            ref={cardRef}
            
            /* style={{  opacity: showButtons ? "0.5" : "1", filter: showButtons ? "blur(2px)" : "blur(0px)" }} */
            /* style={{ opacity: "0.5", filter: "blur(2px)" }} */
        >
            <div
                className="card"
                onClick={handleShow}
                style={{
                    opacity: showButtons ? "0.5" : "1",
                    filter: showButtons ? "blur(2px)" : "blur(0px)",
                }}
            >
                <div className="projectCard-image">
                    <img src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
                {showButtons && (
                    <div className="showBtnCard" onClick={handleShow}> 
                        <button
                            className="cardbtn"
                            onClick={() => handleClick(item.link)}
                            disabled={item.link === ""}
                        >
                            Site
                        </button>
                        <button
                            className="cardbtn"
                            onClick={() => handleClick(item.ghLink)}
                        >
                            GitHub
                        </button>
                    </div>
                )}
        </div>
    );
};

export default Card;
