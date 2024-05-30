import React from "react";
import ime from "../Image/wellman3.png";
import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <>
            <div class="container-fuild abc">
                <div class="row ">
                    {/* <div class="gunjan"> */}
                    <div class="col-2 navbarimage">
                        <img src={ime} width="90%" height="60px" />
                    </div>

                    <div class="col-10">
                        <nav className="nav navbar navbar-expand-lg navbar-light" >
                            <a class="navbar-brand" href=""></a>

                            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto" style={{ marginRight: "-70px" }}>
                                    <li class="nav-item active">
                                        <Link to="/" class="nav-link">Home</Link>
                                    </li>
                                    <li class="nav-item active">
                                        <Link to="/Digital" class="nav-link">Digital</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/Clouds" class="nav-link">Clouds</Link>
                                    </li>

                                    <li class="nav-item">
                                        <Link to="/Industries" class="nav-link">Industries</Link>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Data &AI
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>

                                </ul>
                                <form class="ABC">
                                    <input class="form-control mr-sm-2" style={{ border: "2px solid red" }} type="search" placeholder="Search" aria-label="Search" />
                                </form> &nbsp; &nbsp;
                                <button class="btn btn-outline-danger my-2 my-sm-0 " style={{ backgroundColor: "black", color: "aqua" }} type="submit">Search</button>
                                &nbsp;  &nbsp;  &nbsp;
                                {/* <button class="btn btn-outline-danger my-2 my-sm-0 " href="Signin.js" style={{backgroundColor:"black",color:"red"}} type="submit">Sign In</button> */}
                                <form>
                                    <Link to="/Signin" class="btn btn-outline-danger my-2 my-sm-0" style={{ backgroundColor: "black", color: "red" }}>Sign In</Link>
                                </form>

                            </div>
                        </nav>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
export default Navbar;