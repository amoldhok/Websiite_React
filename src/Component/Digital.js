import React,{useEffect} from 'react';
import AOS from "aos"; 
import "aos/dist/aos.css";

// import React from "react";
import Footer from "./Footer.js";
import img1 from "../Image/digital1.jpg"
import img2 from "../Image/digital2.jpg"
import img3 from "../Image/digital3.jpg"
import img4 from "../Image/digital4.jpg"



function Digital(){
    return (<>
        <div className="container-fluid mb-1">

            <div className="rowamol">
                <div class="industries1" style={{ display: "flex" }}>
                    <div class="col-md-3 col-sm-12" >
                        <img src={img1} class="Aos" data-aos="fade-right" style={{ width: "350px", height: "300px" }} />
                    </div>

                    <div class="digital col-md-7  mb-20 p-3" style={{ backgroundColor: "black", marginLeft: "100px" }}>
                        <p>
                            Platform Development for a Mortgage ISV
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Case Study
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Digital Engineering
                            From digital possibilities to an agile cycle of digital solution development - explore how everything connects under our robust technology DNA, product engineering footprint, and dependable partner network.
                            Cyber Security
                            Embrace complete cyber resiliency with security assessment, practices, engineering capability, and governance. The outcome is a proactive threat identification and remediation posture besides compliance adherence.
                        </p>
                    </div>
                </div>
            </div>



            <div className="rowamol">
                <div class="industries1" style={{ display: "flex" }}>
                    <div class="col-md-3 col-sm-12" >
                        <img src={img2} class="Aos" data-aos="fade-left" style={{ width: "350px", height: "300px" }} />
                    </div>


                    <div class=" digital col-md-7  mb-20 p-3" style={{ backgroundColor: "black" }} >
                        <p>
                            Platform Development for a Mortgage ISV
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Case Study
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Digital Engineering
                            From digital possibilities to an agile cycle of digital solution development - explore how everything connects under our robust technology DNA, product engineering footprint, and dependable partner network.
                            Cyber Security
                            Embrace complete cyber resiliency with security assessment, practices, engineering capability, and governance. The outcome is a proactive threat identification and remediation posture besides compliance adherence.
                        </p>
                    </div>
                </div>
            </div>




            <div className="rowamol">
                <div class="industries1" style={{ display: "flex" }}>
                    <div class=" col-md-3 col-sm-12" >
                        <img src={img3} class="Aos" data-aos="fade-right" style={{ width: "350px", height: "300px" }} />
                    </div>


                    <div class="digital col-md-7  mb-20 p-3" style={{ backgroundColor: "black" }} >
                        <p>
                            Platform Development for a Mortgage ISV
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Case Study
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Digital Engineering
                            From digital possibilities to an agile cycle of digital solution development - explore how everything connects under our robust technology DNA, product engineering footprint, and dependable partner network.
                            Cyber Security
                            Embrace complete cyber resiliency with security assessment, practices, engineering capability, and governance. The outcome is a proactive threat identification and remediation posture besides compliance adherence.
                        </p>
                    </div>
                </div>
            </div>







            <div className="rowamol">
                <div class="industries1" style={{ display: "flex" }}>
                    <div class="col-md-3 col-sm-12">
                        <img src={img4} class="Aos" data-aos="fade-left" style={{ width: "350px", height: "300px" }} />
                    </div>


                    <div class="digital col-md-7  mb-20 p-3" style={{ backgroundColor: "black" }} >
                        <p>
                            Platform Development for a Mortgage ISV
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Case Study
                            Revitalizing Retail with Streamlined Automation for a Global Retail Leader
                            Digital Engineering
                            From digital possibilities to an agile cycle of digital solution development - explore how everything connects under our robust technology DNA, product engineering footprint, and dependable partner network.
                            Cyber Security
                            Embrace complete cyber resiliency with security assessment, practices, engineering capability, and governance. The outcome is a proactive threat identification and remediation posture besides compliance adherence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>


    </>
    )
}
export default Digital;