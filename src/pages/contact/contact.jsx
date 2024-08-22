import React, { useContext } from "react";
import "./contact.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TermsAndConditions from "../../components/t&c/t&c";
import TnCContext from "../../context/t&cContext";


const Contact = () => {
    const {showTnC, setShowTnC} = useContext(TnCContext);
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
    }

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
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="formWrapper">
                        <div className="form1">
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
                                <p onClick={terms} style={{cursor:'pointer'}}>Accept T&C</p>
                                <Field
                                    name="termsBox"
                                    className="checkbox"
                                    type="checkbox"
                                />
                                {errors.termsBox && touched.termsBox ? (
                                    <div style={{ color: "red" }}>
                                        {errors.termsBox}
                                    </div>
                                ) : null}
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                        <div className="form2">
                            <p>dsfasfda</p>
                        </div>
                    </Form>
                )}
            </Formik>
            {showTnC ? <TermsAndConditions /> : null}
        </div>
    );
};

export default Contact;
