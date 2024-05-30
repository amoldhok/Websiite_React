
import Footer from "./Footer.js";
import img1 from "../Image/cloud1.jpg"
import img2 from "../Image/cloud2.jpg"
import img3 from "../Image/cloud3.jpg"
import img4 from "../Image/cloud4.jpg"



let Clouds=()=>{
    return (<>
        <div className="container-fluid mb-1">

            <div className="rowamol">
                <div class="industries1" style={{ display: "flex" }}>
                    <div class="col-md-4 col-sm-12" >
                        <img src={img1} class="Aos" data-aos="fade-down" style={{ width: "350px", height: "300px" }} />
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
           

                <div className="rowamol">
            <div class="industries1" style={{ display: "flex" }}>
                <div class="col-md-4 col-sm-12" >
                    <img src={img2} class="Aos" data-aos="fade-up"  style={{ width: "350px", height: "300px" }} />
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

            <div className="rowamol">
            <div class="industries1" style={{ display: "flex" }}>
                <div class="col-md-4 col-sm-12" >
                    <img src={img3} class="Aos" data-aos="fade-down"  style={{ width: "350px", height: "300px" }} />
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



            <div className="rowamol">
            <div class="industries1" style={{ display: "flex" }}>
                <div class="col-md-4 col-sm-12" >
                    <img src={img4} class="Aos" data-aos="fade-up"  style={{ width: "350px", height: "300px" }} />
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
export default Clouds;