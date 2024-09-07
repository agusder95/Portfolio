import React from "react";
import "./card.scss";
const Card = ({ data }) => {
    const item = data;
    const handleClick = (link) => {
        window.open(link, "_newtab");
    };
    
    return (
        <div className="card">
            <div
                className="projectCard-image"
                onClick={() => handleClick(item.link)}
            >
                <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    );
};

export default Card;
