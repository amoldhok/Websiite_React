import React,{useEffect} from 'react';
import AOS from "aos"; 
import "aos/dist/aos.css";

import img1 from "../Image/giri1.png";
import img2 from "../Image/giri2.png";
import img3 from "../Image/giri3.png";
import img4 from "../Image/giri4.png";
import img5 from "../Image/giri5.png";
import img6 from "../Image/giri7.png";

      
 function AOSP(){

   useEffect(() => {
     AOS.init({duration: 1000,easing: 'ease-in-out',once: true});
    }, []);

  return (
    <>
        <div className="container-fuild text-center">
       <div class="row main_content m-20 rounded-1 " style={{ justifyContent: "center", justifyContent: "space-evenly" }}>
       <div class="col-md-3 col-sm-12">
         <img src={img1} class="Aos" data-aos="fade-left" />
       </div>

       <div class="col-md-3 col-sm-12">
         <img src={img2} class="Aos" data-aos="fade-down" />
       </div>

       <div class="col-md-3 col-sm-12">
         <img src={img3} className="Aos" data-aos="fade-left" />
       </div>
     </div>


     <div class="row main_content m-20 rounded-1" style={{ justifyContent: "center", justifyContent: "space-evenly" }}>
       <div class="col-md-3 col-sm-12">
         <img src={img4} className="Aos" data-aos="fade-right"  />
       </div>

       <div class="col-md-3 col-sm-12">
         <img src={img5} class="Aos"data-aos="fade-down"  />
       </div>

       <div class="col-md-3 col-sm-12">
         <img src={img6} className="Aos" data-aos="fade-left"  />
       </div>
     </div> 

    </div> 
    </>
  )
}
export default AOSP;