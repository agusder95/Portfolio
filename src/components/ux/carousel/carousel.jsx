import React, { useEffect, useState } from "react";
import Next from "../../../assets/images/carousel/next.png";
import Prev from "../../../assets/images/carousel/back.png";
import "./carousel.scss";

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0); //Almacena el indice de la tarjeta actual
    const [width, setWidth] = useState(window.innerWidth); //Almacena el ancho de la pantalla
    const [cardsShow, setCardsShow] = useState(0); //Almacena la cantidad de tarjetas a mostrar
    const [moveValue, setMoveValue] = useState(0); //Almacena el valor de la traslacion de las tarjetas
    const [widthOfCard, setWidthOfCard] = useState(0); //Almacena el ancho del contenedor de las tarjetas
    const percentage = 100 / children.length;

    //cantidad de tarjetas a mostrar segun el ancho de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (window.innerWidth < 1080 && window.innerWidth >= 700) {
                if (children.length < 2) {
                    setCardsShow(children.length);
                    setWidthOfCard(window.innerWidth);
                } else {
                    setCardsShow(2);
                    setWidthOfCard(window.innerWidth / 2);
                }
            } else if (window.innerWidth < 700) {
                setCardsShow(1);
                setWidthOfCard(window.innerWidth);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    const handleNext = () => {
        if (currentIndex < children.length - cardsShow) {
            setCurrentIndex((prev) => prev + 1);
            setMoveValue((prevMoveValue) => prevMoveValue - percentage);
        } else {
            setCurrentIndex(0);
            setMoveValue(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            setMoveValue((prevMoveValue) => prevMoveValue + percentage);
        } else {
            setCurrentIndex(children.length - cardsShow);
            setMoveValue(-percentage * (children.length - cardsShow));
        }
    };

    const quantityIndicators =
        cardsShow === 1 ? children.length : children.length - 1;

    return (
        <div className="carouselWrapper">
            <div className="btnCarousel left" onClick={handlePrev}>
                <img src={Prev} alt="prev" />
            </div>
            <div
                className="carousel"
                style={{
                    transform: `translateX(${moveValue}%)`,
                    width: widthOfCard * children.length,
                }}
            >
                {children.map((child, index) => (
                    <div
                        className="carousel-item"
                        key={index}
                        style={{ width: widthOfCard }}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div className="carouselIndicators">
                {Array.from({ length: quantityIndicators }).map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${
                            currentIndex === index ? "active" : ""
                        }`}
                        onClick={() => {
                            setCurrentIndex(index);
                            setMoveValue(-percentage * index);
                        }}
                    />
                ))}
            </div>
            <div className="btnCarousel right">
                <img src={Next} alt="next" onClick={handleNext} />
            </div>
        </div>
    );
};

export default Carousel;
