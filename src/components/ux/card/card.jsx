import React from "react";
import "./card.scss";
const Card = ({data}) => {
    const item = data;
    const handleClick = (link) => {
        window.open(link, "_newtab");
    };
    return (
        <div className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div
                className="projectCard-image"
                onClick={() => handleClick(item.link)}
            >
                <img src={item.image} alt={item.title} />
            </div>
        </div>
    );
};

export default Card;
