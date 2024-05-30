import React from "react";
import Footer from "./Footer.js";
let Signin = () => {
  return (
    <>
      <div class="container-fluid mb-2 "style={{ width:"98%",backgroundColor:"black"}} >

        <div class="container-fuild bg-dark text-light py-3 "style={{ width:"98%",margin:"0"}} >
          <header class="text-center">
            <h1 class="display-6">Login to Wellman</h1>
          </header>
        </div>


        <div class="container my-2 w-50 text-light p-2" className="Aos" data-aos="fade-up" style={{height:"500px"}}>
          <form>
            <div class="form-row " style={{ display: "flex", gap:"10px" }}>           
             <div class="form-group col-md-5">
                <label>First Name</label>
                <input type="Name" class="form-control" id="Enter Name" placeholder="First name" />
              </div>
              <div class="form-group col-md-5">
                <label>Last Name</label>
                <input type="Last Name" class="form-control" id="Enter Last name" placeholder="Last Name" />
              </div>

              <div class="form-group col-md-5">
                <label>Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div class="form-group col-md-5">
                <label>Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
              </div>
         


            <div class="form-group col-md-10">
              <label>Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="form-group col-md-10">
              <label>Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>



            <div class="form-group col-md-4">
                <label>City</label>
                <input type="text" class="form-control" id="Enter City" placeholder="Enter City" />
              </div>
              <div class="form-group col-md-4">
                <label>State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose State</option>
                  <option>Maharashtra</option>
                  <option>Uttar Pradesh</option>
                  <option>Rajsthan</option>
                  <option>Gujrat</option>
                  <option>Madhy-Pradesh</option>
                  <option>Bihar</option>
                  <option>Zarkhand</option>
                  <option>Karnatak</option>
                  <option>Telangana</option>
                  <option>Asam</option>
                  <option>Goa</option>
                  <option>Chhattisgarh</option>
                </select>


              
              </div>
              <div class="form-group col-md-2">
                <label>Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>

            <div class="max-3">
              <a class="btn btn-primary login" role="button" href="./navbar.html">Sign in</a>
            </div>
          </form>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Signin;