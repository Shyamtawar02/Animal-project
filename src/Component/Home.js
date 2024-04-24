import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img4.jpeg";
import img3 from "../Assets/Volunteer General-save2_0.jpeg";
import multi from "../Assets/multi.png";
import Blocks from "../Component/Blocks";
import Blocks2 from "../Component/Blocks2"

function Home() {
    return <div className="w-100" style={{ height: "auto" }}>

        <div id="carouselExampleCaptions" className="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={multi} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item active">
                    <img src={multi} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item active">
                    <img src={multi} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


        <div className="container-fluid d-flex justify-content-between mt-5" >
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 w-100">
                <div className=" col">
                    <img className="img-fluid" alt="" src="https://cdn.cdnparenting.com/articles/2023/09/04181406/2234782329-696x476.jpg" />
                </div>
                <div className="col  ">
                    <div className=" d-flex justify-content-center mt-5 w-100">
                        <h2 className="fw-bolder w-75 mt-5">79.9 MILLION ANIMALS AT RISK</h2>
                    </div>
                    <div className="d-flex justify-content-center mt-4 w-100">
                        <p className="w-75 ">In India, street dogs are misunderstood as dangerous, savage animals. SAFI works alongside India's local shelters to rescue, rehabilitate, vaccinate, and house these strays in need .</p>
                    </div>
                    <div className="d-flex justify-content-center mt-3  w-100" >
                        <button type="button" class="btn btn-warning " style={{ backgroundColor: "rgb(246,124,35)", color: "white", fontSize: "14px", border: "none" }}>About Us</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid d-flex justify-content-between mt-3">
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 w-100">
                <div className="col" >
                    <div className="d-flex justify-content-center mt-5  text-dark w-100">
                        <h2 className="fw-bolder w-75 mt-5">HOUSING,CARE,& MORE FOR INDIA'S MOST VULNERABLE</h2>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <p className="w-75">Since 2020, we've helped build up India's animal welfare infrastructure providing medical care, food, forever home matching, education, and much more. Your tax- deductible donation helps us fight for stray animals in India .</p>
                    </div>
                    <div className="d-flex justify-content-center mt-3" >
                        <button type="button" class="btn btn-warning   " style={{ backgroundColor: "rgb(246,124,35)", color: "white", fontSize: "14px", border: "none" }}>Donate</button>
                    </div>
                </div>

                <div className="col mt-4 ">
                    <img className="img-fluid" alt="" src="https://media.istockphoto.com/id/1316709701/photo/crop-volunteer-stroking-happy-stray-dog.jpg?s=612x612&w=0&k=20&c=3wQkposCjT4AraEr3JPbGFX7jkU4fsWrtV45qLOYOyg=" />
                </div>


            </div>
        </div>
            <Blocks/>

           <Blocks2/>
        <div className="container  border border-dark rounded-5 mt-3">
            <div className=" d-flex justify-content-evenly mt-5 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 w-100" >
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid w-75 " alt="" src={img1} />

                    </div>
                    <div className="d-flex justify-content-evenly text-center mt-3" >
                        <p className="w-75">From Paralyzed to Pampered: The Inspirational Journey of a Street Dog in the USA In the heartwarming world of animal rescue,[ ... ]</p>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid w-75" alt="" src={img2} />
                    </div>
                    <div className="d-flex justify-content-evenly text-center mt-3" >

                        <p className="w-75" >From Indian Streets to Texas Rodeo Star: Barfi's Inspiring Journey to a Forever Home Everyone loves a heartwarming tale of[ ... ]</p>

                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid w-75" alt="" src={img3} />

                    </div>
                    <div className="d-flex justify-content-evenly text-center mt-3" >
                        <p className="w-75" >On the streets of India, dogs are hated like the plague. This discrimination makes people believe that street dogs are non- adoptable . Through[ ... ]</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Container-fluid mt-4 d-flex justify-content-center align-items-center" style={{ height: "400px", backgroundColor: "rgb(246,124,35)" }}>
            
            <div className="w-75 h-75 text-dark">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/cKoBvEaF2mk?si=4runGcXk5wocoq-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    </div>
}
export default Home;
