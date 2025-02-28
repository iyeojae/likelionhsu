import React from "react";
import "./css/App.css";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./jsx/Navbar";
import Home from "./jsx/Home";
import Map from "./jsx/Map";
import Perform from "./jsx/Perform";
import Volunteer from "./jsx/Volunteer";
import Education from "./jsx/Education";
import Gym from "./jsx/Gym";
import Art from "./jsx/Art";
import Hobby from "./jsx/Hobby";
import Religion from "./jsx/Religion";

const pageVariants = { 
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/map"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Map />
                        </motion.div>
                    }
                />
                <Route
                    path="/perform"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Perform />
                        </motion.div>
                    }
                />
                <Route
                    path="/volunteer"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Volunteer />
                        </motion.div>
                    }
                />
                <Route
                    path="/education"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Education />
                        </motion.div>
                    }
                />
                <Route
                    path="/gym"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Gym />
                        </motion.div>
                    }
                />
                <Route
                    path="/art"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Art />
                        </motion.div>
                    }
                />
                <Route
                    path="/hobby"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Hobby />
                        </motion.div>
                    }
                />
                <Route
                    path="/religion"
                    element={
                        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                            <Religion />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => { /*추가추갗구ㅏ*/
    return (
        <Router>
            <Navbar /> {/* 고정 유지 */}
            <AnimatedRoutes /> {/* 페이지 전환 애니메이션 */}
        </Router>
    );
};

export default App;