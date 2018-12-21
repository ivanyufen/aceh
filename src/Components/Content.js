import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (

            <div>
                {/* Content Example Product */}
                <div className="container-fluid bg-light-gray">
                    <div className="container pt-5">
                        <div className="row">
                            <h4>EXAMPLE PRODUCT</h4>
                        </div>
                        <div className="underline"></div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src="img1/jaket1.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <h5>Marloes Cognac Suede Jacket</h5>
                                    <h6>IDR 499K</h6>
                                    <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                        Add To Cart</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card">
                                <img src="img1/jaket2.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <h5>Naples Black Suede Jacket</h5>
                                    <h6>IDR 499K</h6>
                                    <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                        Add To Cart</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card">
                                <img src="img1/jaket3.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <h5>Sienna Blue Suede Jacket</h5>
                                    <h6>IDR 399K</h6>
                                    <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                        Add To Cart</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card">
                                <img src="img1/jaket4.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <h5>Marloes Burgundy Suede Jacket</h5>
                                    <h6>IDR 499K</h6>
                                    <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                        Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Example Size */}
                    <div className="container mt-5">
                        <div className="row">
                            <h4>EXAMPLE SIZE</h4>
                        </div>
                        <div className="row">
                            <div className="underline"></div>
                        </div>
                    </div>

                    <div className="conainer mt-5 pb-5">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="img1/shirt1.jpg" alt="ex" className="card-img-top" />
                                    <div className="card-body">
                                        <h5>Palermo Down Shirt</h5>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Custom Size</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="img1/shirt2.jpg" alt="ex" className="card-img-top" />
                                    <div className="card-body">
                                        <h5>Merkens Black Shirt</h5>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Custom Size</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="imG1/shirt3.jpg" alt="ex" className="card-img-top" />
                                    <div className="card-body">
                                        <h5>Whistler Button Shirt</h5>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Custom Size</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="img1/shirt4.jpg" alt="ex" className="card-img-top" />
                                    <div className="card-body">
                                        <h5>Parakeet Paisley Shirt</h5>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Custom Size</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Knitwear */}
                <div className="container-fluid pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row text-uppercase">
                                    Knitwear
                                </div>
                                <div className="row">
                                    <div className="underline-black"></div>
                                </div>
                                <div className="media mt-5">
                                    <img src="img1/knitwear1.jpg" className="img-fluid mr-3" alt="media-img" />
                                    <div className="media-body mt-2">
                                        <h5>Blue Henley</h5>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Add to cart</button>
                                    </div>
                                </div>


                                <div className="media mt-5">
                                    <img src="img1/knitwear2.jpg" className="img-fluid mr-3" alt="media-img" />
                                    <div className="media-body mt-2">
                                        <h5>Teal Shawl Collar</h5>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            add to cart</button>
                                    </div>
                                </div>


                                <div className="media mt-5">
                                    <img src="img1/knitwear3.jpg" className="img-fluid mr-3" alt="media-img" />
                                    <div className="media-body mt-2">
                                        <h5>Brown Turtle Neck</h5>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            add to cart</button>
                                    </div>
                                </div>
                            </div>


                            {/* Content Watches */}
                            <div className="green">
                                <div className="col-md-4">
                                    <div className="row text-uppercase">
                                        Watches
                                </div>
                                    <div className="row">
                                        <div className="underline-black"></div>
                                    </div>
                                    <div className="media mt-5">
                                        <img src="img1/watches1.jpg" className="img-fluid mr-3" alt="media-img" />
                                        <div className="media-body mt-2">
                                            <h5>Minneapolis Blue</h5>
                                            <h6>IDR 399K</h6>
                                            <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                add to cart</button>
                                        </div>
                                    </div>


                                    <div className="media mt-5">
                                        <img src="img1/watches2.jpg" className="img-fluid mr-3" alt="media-img" />
                                        <div className="media-body mt-2">
                                            <h5>Kinsale Matte</h5>
                                            <h6>IDR 399K</h6>
                                            <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                add to cart</button>
                                        </div>
                                    </div>


                                    <div className="media mt-5">
                                        <img src="img1/watches3.jpg" className="img-fluid mr-3" alt="media-img" />
                                        <div className="media-body mt-2">
                                            <h5>Montpellier Blue</h5>
                                            <h6>IDR 399K</h6>
                                            <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shoes */}
                            <div className="maroon">
                                <div className="col-md-4">
                                    <div className="row text-uppercase">
                                        Men's Shoes
                                    </div>
                                    <div className="row">
                                        <div className="underline-black"></div>
                                    </div>
                                    <div className="media mt-5">
                                        <img src="img1/shoesq.jpg" className="img-fluid mr-3" alt="media-img" />
                                        <div className="media-body mt-2">
                                            <h5>Oxford Captoe Black</h5>
                                            <h6>IDR 399K</h6>
                                            <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                add to cart</button>
                                        </div>
                                    </div>


                                    <div className="media mt-5">
                                        <img src="img1/shoes1.jpg" className="img-fluid mr-3" alt="media-img" />
                                        <div className="media-body mt-2">
                                            <h5>Oxford Wingtip Black</h5>
                                            <h6>IDR 399K</h6>
                                            <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                Add to cart</button>
                                        </div>
                                    </div>


                                    <div className="media mt-5">
                                        <img src="img1/shoes3.jpg   " className="img-fluid mr-3" alt="media-img" />
                                        <div className="media-body mt-2">
                                            <h5>Oxford KnitOreo Black</h5>
                                            <h6>IDR 399K</h6>
                                            <button className="btn btn-outline-dark text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                                Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Content Featured */}
                <div className="container-fluid bg-light-gray pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <h4>FEATURED</h4>
                        </div>
                        <div className="row">
                            <div id="featuredUnderline" className="underline"></div>
                        </div>
                    </div>

                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="img1/jaket4.jpg" className="card-img-top" alt="img-featured" />
                                    <div className="card-body">
                                        <h4>Jackets</h4>
                                        <h6>IDR 499K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Add To Cart</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="img1/shirt3.jpg" className="card-img-top" alt="img-featured" />
                                    <div className="card-body">
                                        <h4>Shirts</h4>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Add To Cart</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="img1/watches2.jpg" className="card-img-top" alt="img-featured" />
                                    <div className="card-body">
                                        <h4>Watches</h4>
                                        <h6>IDR 399K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Add To Cart</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="img1/knitwear3.jpg" className="card-img-top" alt="img-featured" />
                                    <div className="card-body">
                                        <h4>Knitwear</h4>
                                        <h6>IDR 499K</h6>
                                        <button className="btn btn-danger text-uppercase font-knitwear"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                            Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Content From The Blog */}
                <div className="container mt-5">
                    <div className="row">
                        <h4>FROM THE BLOG</h4>
                    </div>
                    <div className="row">
                        <div className="underline"></div>
                    </div>
                </div>

                {/* From The Blog Media 1 */}
                <div className="container pb-5 blog">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="media mt-5">
                                <img src="img1/shoes1.jpg" className="img-fluid mr-3" alt="mediablog1" />
                                <div className="media-body">
                                    <h5>Exclusive for your style</h5>
                                    <p>lorem ipsum dolor sit amet.</p>
                                    <p><i className="fa fa-user" aria-hidden="true"></i> admin. Date: 30-11-2018</p>
                                </div>
                            </div>
                        </div>

                        {/* From The Blog Media 2 */}
                        <div className="col-md-6">
                            <div className="media mt-5">
                                <img src="img1/shoes2.jpg" className="img-fluid mr-3" alt="mediablog2" />
                                <div className="media-body">
                                    <h5>Exclusive for your style</h5>
                                    <p>lorem ipsum dolor sit amet.</p>
                                    <p><i className="fa fa-user" aria-hidden="true"></i> admin. Date: 30-11-2018</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* From The Blog Media 3 */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="media mt-5">
                                <img src="img1/shoes3.jpg" className="img-fluid mr-3" alt="mediablog3" />
                                <div className="media-body">
                                    <h5>Exclusive for your style</h5>
                                    <p>lorem ipsum dolor sit amet.</p>
                                    <p><i className="fa fa-user" aria-hidden="true"></i> admin. Date: 30-11-2018</p>
                                </div>
                            </div>
                        </div>

                        {/* From The Blog Media 4 */}
                        <div className="col-md-6">
                            <div className="media mt-5">
                                <img src="img1/shoes4.jpg" className="img-fluid mr-3" alt="mediablog4" />
                                <div className="media-body">
                                    <h5>Exclusive for your style</h5>
                                    <p>lorem ipsum dolor sit amet.</p>
                                    <p><i className="fa fa-user" aria-hidden="true"></i> admin. Date: 30-11-2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Content;