import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Industries from "./Component/Industries";
import Signin from "./Component/Signin";
import { Route, Routes } from "react-router-dom";
import Clouds from "./Component/Clouds";
import Digital from "./Component/Digital";

let App=()=>
{ 
    return(
        <> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Industries" element={<Industries/>}></Route>           
            <Route path="/Signin" element={<Signin/>}></Route>
            <Route path="/Clouds" element={<Clouds/>}></Route> 
            <Route path="/Digital" element={<Digital/>}></Route>           
        </Routes>
        </>
    )
}
export default App;