import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Carousel extends Component {
    render() {
        return(
            <div>
                {/* Carousel */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="radiuscarousel">
                        <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                    </div>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="img1/slider1.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>YOUR BUSINESS SOLUTION</h2>
                            <p>Stay sharp on the weekend, Browse our loafers collection.</p>
                            <button className="btn btn-outline-light btn-dark">SHOP</button>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img1/slider2.jpg" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img1/slider3.jpg" alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img1/slider4.jpg" alt="Third slide"/>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>

                    {/* Info Under Carousel */}
                    <div id="info" className="container-fluid offer pt-3 pb-3 bg-black d-none d-md-block text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 m-right">
                                <h5>FREE CONSULTATION</h5>
                                <p>Find Your Style !</p>
                            </div>
                            <div className="col-md-4 m-right">
                                <h5>CALL US ANYTIME</h5>
                                <p>+62 852 9611 6745</p>
                            </div>
                            <div className="col-md-4">
                                <h5>OUR LOCATION</h5>
                                <p>Sinarmas MSIG Tower, Jalan Jendral Sudirman, <br/> South Jakarta City, Jakarta, Indonesia
                                </p>
                                <h4></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Carousel;