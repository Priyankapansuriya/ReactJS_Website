import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/about-us-2.svg";
import Common from "./Common";

const About = (props) => {
    return (
        <>
            <Common 
            name="Welcome to about page" 
            imgsrc={web} 
            visit="/contact" 
            btname="Contact Now"/>
        </>
    )
}

export default About;