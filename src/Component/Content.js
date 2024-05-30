import React from "react";
let Content = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className="container-fluid">
        {/* <div className="row"> */}



        <div class="row  main_content text-center m-0" style={{ height: "170px" }}>
          <div class="col-md-3 col-sm-12 block_card border  ctcolor">
            <i class="fas fa-certificate fa-2x mt-2" aria-hidden="true"></i>
            <h4> Certified Courses</h4>
            <p>We provide certified Courses to student with 100% placement support.</p>
          </div>

          <div class="col-md-3 col-sm-12 block_card border  ctcolor1">
            <i class="fas fa-chalkboard-teacher fa-2x mt-2" aria-hidden="true"></i>
            <h4>Premium Placements</h4>
            <p>We provide certified Courses to student with 100% placement support.</p>
          </div>

          <div class="col-md-3 col-sm-12 block_card border  ctcolor">
            <i class="fas fa-stream fa-2x mt-2" aria-hidden="true"></i>
            <h4>Weakly Assesments</h4>
            <p>We provide certified Courses to student with 100% placement support.</p>
          </div>

          <div class="col-md-3 col-sm-12 block_card border  ctcolor1">
            <i class="fas fa-users fa-2x mt-2" aria-hidden="true"></i>
            <h4>Expeert Faculty</h4>
            <p>We provide certified Courses to student with 100% placement support.</p>
          </div>



        </div>
        {/* </div> */}
      </div>

    </>
  )
}
export default Content;