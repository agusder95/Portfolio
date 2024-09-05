import React, { useContext, useState } from "react";
import "./contact.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TermsAndConditions from "../../components/t&c/t&c";
import TnCContext from "../../context/t&cContext";
import { CiMail, CiChat1, CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons";
import CV from "../../assets/images/cv.png";
import CVESP from "../../../public/Files/CV-Agustin De Robles-ESP.pdf";
import CVENG from "../../../public/Files/CV-Agustin De Robles-ESP.pdf";
const Contact = () => {
    const [copied, setCopied] = useState(false);
    const textToCopy = "agustin.derobles1995@gmail.com";

    const { showTnC, setShowTnC } = useContext(TnCContext);
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        message: Yup.string()
            .min(2, "Too Short!")
            .max(500, "Too Long!")
            .required("Required"),
        termsBox: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
        ),
    });

    const terms = () => {
        setShowTnC(!showTnC);
    };

    const handleCopy = () => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            })
            .catch((error) => {
                console.error("Error al copiar el texto: ", error);
                setCopied(false);
            });
    };

    return (
        <div className="contactWrapper">
            <h2>Contact me</h2>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    message: "",
                    termsBox: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        /* alert(JSON.stringify(values, null, 2)); */
                        alert(
                            `Sorry ${values.name}, I'm working in this feature. if you want to contact me, please click on "Contact Me"`
                        );
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="formWrapper">
                        <div className="formcards">
                            <p
                                style={{
                                    borderBottom: "1px solid",
                                    width: "50%",
                                    textAlign: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                Send me a mail directly
                            </p>
                            <div className="formContainer">
                                {/* <p>Name</p> */}
                                <Field
                                    name="name"
                                    style={
                                        errors.name
                                            ? { border: "2px solid red" }
                                            : { border: "1px solid black" }
                                    }
                                    placeholder="Name"
                                />
                                {errors.name && touched.name ? (
                                    <div style={{ color: "red" }}>
                                        {errors.name}
                                    </div>
                                ) : null}
                            </div>
                            <div className="formContainer">
                                {/* <p>Email</p> */}
                                <Field
                                    name="email"
                                    style={
                                        errors.email
                                            ? { border: "2px solid red" }
                                            : { border: "1px solid black" }
                                    }
                                    placeholder="Email"
                                />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>
                            <div className="formContainer">
                                {/* <p>Message<formContainer">
                                {/* <p>Message</p> */}
                                <Field
                                    style={
                                        errors.message
                                            ? { border: "2px solid red" }
                                            : { border: "1px solid black" }
                                    }
                                    as="textarea"
                                    name="message"
                                    placeholder="Message"
                                    rows="6"
                                    cols="50"
                                />
                                {errors.message && touched.message ? (
                                    <div style={{ color: "red" }}>
                                        {errors.message}
                                    </div>
                                ) : null}
                            </div>

                            <div className="formContainer">
                                <p>
                                    Accept{" "}
                                    <b
                                        onClick={terms}
                                        style={{
                                            cursor: "pointer",
                                            color: "red",
                                        }}
                                    >
                                        T&C
                                    </b>
                                </p>
                                <Field
                                    name="termsBox"
                                    className="checkbox"
                                    type="checkbox"
                                />
                                {errors.termsBox && touched.termsBox ? (
                                    <div
                                        style={{
                                            color: "red",
                                            flexGrow: "1",
                                            textAlign: "center",
                                        }}
                                    >
                                        {errors.termsBox}
                                    </div>
                                ) : null}
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                        <div className="formcards">
                            <ul>
                                <li>
                                    <IconContext.Provider
                                        value={{ className: "iconContact" }}
                                    >
                                        <CiChat1 />
                                    </IconContext.Provider>
                                    <a href="mailto:agustin.derobles1995@gmail.com?subject=Contact%20From%20Portfolio">
                                        Contact Me
                                    </a>
                                </li>
                                <li>
                                    <IconContext.Provider
                                        value={{ className: "iconContact" }}
                                    >
                                        <CiMail />
                                    </IconContext.Provider>
                                    <p
                                        onClick={handleCopy}
                                        style={{ cursor: "pointer" }}
                                    >
                                        agustin.derobles1995@gmail.com
                                    </p>

                                    {copied && (
                                        <div className="centerAlert">
                                            <div className="alertCopy">
                                                <h3>
                                                    <b>Copied to clipboard!</b>
                                                </h3>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <IconContext.Provider
                                        value={{ className: "iconContact" }}
                                    >
                                        <DiGithubBadge />
                                    </IconContext.Provider>
                                    <a
                                        href="https://github.com/agusder95"
                                        target="_blank"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <IconContext.Provider
                                        value={{ className: "iconContact" }}
                                    >
                                        <CiLinkedin />
                                    </IconContext.Provider>
                                    <a
                                        href="https://www.linkedin.com/in/agustin-de-robles-62a965214/"
                                        target="_blank"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                            <div className="cvDownloadContainer">
                                <a href={CVENG} download="CV-Agustin De Robles">
                                    <div className="imgCvContainer">
                                        <img src={CV} alt="cv" />
                                    </div>
                                    <p>Download my CV <br/>[ENG]</p>
                                </a>

                                <a href={CVESP} download="CV-Agustin De Robles">
                                    <div className="imgCvContainer">
                                        <img src={CV} alt="cv" />
                                    </div>
                                    <p>Descarga mi CV <br/>[ESP]</p>
                                </a>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            {showTnC ? <TermsAndConditions /> : null}
        </div>
    );
};

export default Contact;
