
function Header() {
    return <>
        <div className="container-fluid d-flex align-items-center" style={{ backgroundColor: "rgb(87,201,130)" }}>
            <div className="d-flex justify-content-center  row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 " >
                <div className="col ms-5 mt-2 mb-2">
                    <i class="fa fa-facebook text-light px-3" style={{ fontSize: "22px" }}></i>
                    <i class="fa fa-instagram text-light px-3" style={{ fontSize: "22px" }}></i>
                    <i class="fa fa-twitter text-light  px-3" style={{ fontSize: "22px" }}></i>
                    <i class="fa fa-youtube-play text-light  px-3" style={{ fontSize: "22px" }}></i>
                    <i class="fa fa-linkedin-square text-light  px-3" style={{ fontSize: "22px" }}></i>
                </div>
            </div>
        </div>
        <div className="container-fluid  d-flex justify-content-around align-items-center">
            <div >
                <img className="img-fluid w-25" src="Logo1.png" />
            </div>
            
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid  " style={{ fontSize: "15px", fontWeight: "500" }}>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link active" href="#">About us</a>
                                </li>
                                <li class="nav-item dropdown  ">
                                    <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ways to Help
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown ">
                                    <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        What We Do
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link active" href="#" tabindex="-1" >Contact Us</a>
                                </li>
                                <li class="nav-item ">
                                <button type="button" class="btn btn-warning ms-4 " style={{ backgroundColor: "rgb(246,124,35)", color: "white", fontSize: "14px", border: "none" }}>Donate</button>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            
        </div>
    </>
}
export default Header;
