import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";

const MyRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/resume" element={<About />} />
                    <Route path="/projects" element={<Services />} />
                    <Route path="/skills" element={<Contact />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="*" element={<Home />} /> */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default MyRoutes;
