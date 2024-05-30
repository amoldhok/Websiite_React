import React from "react";
import img1 from "../Image/faculty.jpg";
import img2 from "../Image/liveclass.png";
import img3 from "../Image/video.jpg";
import img4 from "../Image/discussion.jpg";
import img5 from "../Image/assignment.jpg";
import img6 from "../Image/learning.jpg";
import img7 from "../Image/trusted.jpg";
import img8 from "../Image/online.jpeg";
import img9 from "../Image/fees.jpg";
let Aboutclass = () => {
  return (
    <>
<div className="container-fuild text-center">

        <div className="row setimagesize" style={{justifyContent:"center",justifyContent:"space-evenly"}}>
            <div className="col-md-3 col-sm-12">
            {/* <div class="box-container"> */}
              <img src={img1} />
            {/* </div> */}
            <h4>Class Faculty</h4>
            <p>We provide Best faculty for our students.</p>
            </div>

          <div class="col-md-3 col-sm-12">
            {/* <div class="box-container"> */}
              <img src={img2}/>
            {/* </div> */}
            <h4>Live Classes</h4>
            <p> We provide online as well as offline Classes.</p>
          </div>

          <div class="col-md-3 col-sm-12">
            {/* <div class="box-container"> */}
              <img src={img3}/>
            {/* </div> */}
            <h4>Video Lectures</h4>
            <p>We provide topic wise video lecture</p>
          </div>
        </div>
       
    


      <div className="row main_content m-20 rounded-1 setimagesize" style={{justifyContent:"center",justifyContent:"space-evenly"}}>
        <div class="col-md-3 col-sm-12">
          {/* <div class="box-container"> */}
            <img src={img4} />
          {/* </div> */}
          <h4>Student Discussion</h4>
          <p>No discussion</p>
        </div>

        <div class="col-md-3 col-sm-12">
          {/* <div class="box-container"> */}
            <img src={img5} />
          {/* </div> */}
          <h4>Assignment and Quiz</h4>
          <p>Daily practical and classess from morning 9am to 3pm</p>
        </div>

        <div class="col-md-3 col-sm-12">
          {/* <div class="box-container"> */}
            <img src={img6} />
          {/* </div> */}
          <h4>Upto Date About Learning</h4>
          <p>we provide theory knowledge as well as practical</p>
        </div>
      </div>



      <div className="row setimagesize" style={{justifyContent:"center",justifyContent:"space-evenly"}}>
        <div class="col-md-3 col-sm-12">
          {/* <div class="box-container"> */}
            <img src={img7} />
          {/* </div> */}
          <h4>Well Man</h4>
          <p>5 year of experience...</p>
        </div>

        <div class="col-md-3 col-sm-12">
          {/* <div class="box-container"> */}
            <img src={img8} />
          {/* </div> */}
          <h4>Online & Offline</h4>
          <p>Online as well as offline batches are available</p>
        </div>

        <div class="col-md-3 col-sm-12">
          {/* <div class="box-container"> */}
            <img src={img9} />
          {/* </div> */}
          <h4>Fees Structure</h4>
          <p>Installment are availble</p>
        </div>
      </div>


      
      </div>
    </>
  )
}
export default Aboutclass;