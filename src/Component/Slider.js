import React from "react";
import ime1 from "../Image/traiding6.jpg";
import ime2 from "../Image/cloud1.jpg";
import ime3 from "../Image/network1.jpg";

let Slider = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="col-md-12">

                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src={ime1} class="d-block w-100" alt="..."style={{height:"500px",width:"98%"}}/>
                            </div>

                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={ime2} class="d-block w-100" alt="..."style={{height:"500px",width:"98%"}} />
                            </div>

                            <div class="carousel-item">
                                <img src={ime3} class="d-block w-100" alt="..." style={{height:"500px",width:"98%"}}/>
                            </div>

                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Slider;