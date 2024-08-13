import React from "react";
import "./footer.scss";
import ArrowTop from "../../assets/images/Mobile/less.png";
const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="footerWrapper">
            <div className="TopArrowContainer" onClick={scrollToTop}>
                <div className="topArrowImgContainer">
                    <img src={ArrowTop} alt="arrowTop" />
                </div>
            </div>

            <p>hola</p>
            <p>im a test</p>
        </div>
    );
};

export default Footer;
