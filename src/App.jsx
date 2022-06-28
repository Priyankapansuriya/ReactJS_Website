import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    return (
        <>
           <Navbar />
           <Routes>
                <Route exact path ="/" element= {<Home />}></Route>
                <Route exact path ="/about" element= {<About />}></Route>
                <Route exact path ="/service" element= {<Service />}></Route>
                <Route exact path ="/contact" element= {<Contact />}></Route>
                <Route path ="/redirect" element={<Navigate to="/"/>} ></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App;