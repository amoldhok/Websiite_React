import React from "react";
import Footer from "./Footer.js";
import img1 from "../Image/industries3.jpg";
import img2 from "../Image/industries4.jpg";
import img3 from "../Image/industries.jpg"
import img4 from "../Image/industries1.jpg"
let Industries = () => {
    return (
        <>
            <div className="container-fulid mb-1">

                <div className="rowgunju">
                    <div class=" industries1" style={{ display:"flex"}}>
                        <div class="col-4">
                            <img src={img1} class="Aos" data-aos="fade-zoom" style={{ width:"350px", height: "300px"}} />
                        </div>


                        <div class="col-md-7  mb-20 p-3" style={{ backgroundColor: "black" }} >
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



                <div className="rowgunju">
                    <div class=" industries1" style={{ display: "flex" }}>
                        <div class="col-4 ">
                            <img src={img2} class="Aos" data-aos="fade-left" style={{ width: "350px", height: "300px" }} />
                        </div>


                        <div class="col-md-7  mb-20 p-3" style={{ backgroundColor: "black" }} >
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




                <div className="rowgunju">
                    <div class=" industries1" style={{ display: "flex" }}>
                        <div class="col-4">
                            <img src={img3} class="Aos" data-aos="fade-up" style={{ width: "350px", height: "300px" }} />
                        </div>


                        <div class="col-md-7  mb-20 p-3" style={{ backgroundColor: "black" }} >
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



                <div className="rowgunju">
                    <div class=" industries1" style={{ display: "flex" }}>
                        <div class="col-4">
                            <img src={img4} class="Aos" data-aos="fade-zoom" style={{ width: "350px", height: "300px" }} />
                        </div>


                        <div class="col-md-7  mb-20 p-3" style={{ backgroundColor: "black" }} >
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
export default Industries;