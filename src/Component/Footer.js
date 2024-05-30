import React from "react";
import Industries from "./Industries";
import { Link } from "react-router-dom";


let Footer = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

            <div className="container-fulid footer bg-dark text-center" style={{ color: "white" }}>
                <div className="row text-center">
                    <div className="col-md-12">

                        <div class="newsletter">
                            <div class="brands">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                                <i class="fa-brands fa-twitter"></i>

                                <h2> Subscribe our Newletter. </h2>
                                <p> We are good working team. You will enjoy our company. </p>
                            </div>
                            <div class="n-item">
                                <label>
                                    <input type="text" name="" placeholder="Enter your email" />&nbsp; &nbsp; &nbsp; &nbsp;
                                    <button>Subscribe</button>

                                </label>
                            </div>
                        </div>
                        <div class="f-contact" data-aos="fade-up">
                            <div>
                                <h4>Informations</h4>
                                <p>company Detail</p>
                                <p>Projects</p>
                                <p>Carrier</p>
                                <p>Events</p>
                            </div>
            

                            <div>
                                <h4>Quick Link</h4>
                                <Link to="/Industries" class="nav-link">Industries</Link>
                                <p>Company</p>
                                <p>Carrier</p>
                                <p>Contact US</p>
                            </div>
                            <div>
                                <h4>Services</h4>
                                <p>Digital</p>
                                <p> Cloud</p>
                                <p> Data</p>
                                <p> Security</p>
                            </div>
                            <div >
                                <h4>Help & Support</h4>
                                <p> Privacy Policy</p>
                                <p> Terms & Conditions</p>
                                <p> Technical Support</p>
                                <p id="DEMO">Customer Care </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;