import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/scrollToTop";
import Layout from "../layout/layout";
import SpinnerLoader from "../components/ux/spinnerLoader/spinnerLoader";

const Home = lazy(() => import("../pages/home/home"));
const Projects = lazy(() => import("../pages/projects/projects"));
const Contact = lazy(() => import("../pages/contact/contact"));
const MyRoutes = () => {



    return (
        <Router>
            <Suspense fallback={<SpinnerLoader />} >
            <Layout>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="/resume" element={<About />} />
                    <Route path="/projects" element={<Services />} />
                    <Route path="/skills" element={<Contact />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="*" element={<Home />} /> */}
                </Routes>
            </Layout>
            </Suspense>
        </Router>
    );
};

export default MyRoutes;
