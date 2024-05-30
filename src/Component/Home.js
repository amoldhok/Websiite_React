import React from "react";
import Slider from "../Component/Slider.js";
import Content from "../Component/Content.js";
import Contentheading from "../Component/Contentheading.js";
import AOSP from "../Component/AOSP.js";
import Ourheading from "../Component/Ourheading.js";
import Aboutclass from "../Component/Aboutclass.js";
import Footer from "../Component/Footer.js";
let Home=()=>
{ 
    return(
        <> 
        
        <Slider/>
        <Content/>
        <Contentheading/>
        <AOSP/>
        <Ourheading/>
        <Aboutclass/>
        <Footer/>
        
        </>
    )
}

export default Home;