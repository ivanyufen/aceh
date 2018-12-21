import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyCart extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>

                    {/* Header */}

                    <section className="header-main">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-sm-4">
                                    <div className="brand-wrap">
                                        <img className="logo" src="img/Logo Pro-Motion Transparan.png" />
                                        <h2 className="logo-text"></h2>
                                    </div> {/* brand-wrap.// */}
                                </div>
                                <div className="col-lg-6 col-sm-8">
                                    <form action="#" className="search-wrap">
                                        <div className="input-group w-100">
                                            <input type="text" className="form-control" style={{width: "55%"}} placeholder="Search"/>
                                            <select className="custom-select" name="category_name">
                                                <option value="">All type</option><option value="codex">Special</option>
                                                <option value="comments">Only best</option>
                                                <option value="content">Latest</option>
                                            </select>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form> {/* search end */}
                                </div> {/* col */}
                                <div className="col-lg-3 col-sm-12">
                                    <a href="#" className="widget-header float-md-right">
                                        <div className="icontext">
                                            <div className="icon-wrap"><i className="flip-h fa-lg fa fa-phone"></i></div>
                                            <div className="text-wrap">
                                                <small>Phone</small>
                                                <div>+62 811 000 000</div>
                                            </div>
                                        </div>
                                    </a>
                                </div> {/* col */}
                            </div> {/* row */}
                        </div> {/* container */}
                    </section> {/* header-main */}
                    <header />


                    {/* SECTION CONTENT */}
                    <section className="section-content bg padding-y border-top" />
                    <div className="container">

                        <div className="row">
                            <main className="col-sm-9">
                                <div className="card">
                                    <table className="table table-hover shopping-cart-wrap" />
                                    <thead className="text-muted">
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col" width="120">Quantity</th>
                                            <th scope="col" width="120">Price</th>
                                            <th scope="col" className="text-right" width="200">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody />
                                    <tr />
                                    <td />
                                    <figure className="media">
                                        <div className="img-wrap"><img src="img1/shoes2.jpg/" className="img-thumbnail img-sm" /></div>
                                        <figcaption className="media-body">
                                            <h6 className="title text-truncate">Oxford Wingtip Black-White </h6>
                                            <dl className="dlist-inline small">
                                                <dt>Size: </dt>
                                                <dd>42 EU</dd>
                                            </dl>
                                            <dl className="dlist-inline small">
                                                <dt>Color: </dt>
                                                <dd>Black-White color</dd>
                                            </dl>
                                        </figcaption>
                                    </figure>
                                    <td />
                                    <td />
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                    <td />
                                    <td>
                                        <div className="price-wrap">
                                            <var className="price">IDR 399K</var>
                                            <small className="text-muted">(IDR lorem ipsum)</small>
                                        </div> {/* price-wrap */}
                                    </td>
                                    <td className="text-right">
                                        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-outline-success" data-toggle="tooltip"> <i className="fa fa-heart"></i></a>
                                        <a href="" className="btn btn-outline-danger"> × Remove</a>
                                    </td>
                                    <tr />
                                    <tr />
                                    <td>
                                        <figure className="media">
                                            <div className="img-wrap"><img src="img1/watches3.jpg/" className="img-thumbnail img-sm" /></div>
                                            <figcaption className="media-body">
                                                <h6 className="title text-truncate">Montpellier Blue Chronograph Watch </h6>
                                                <dl className="dlist-inline small">
                                                    <dt>Size: </dt>
                                                    <dd>Normal</dd>
                                                </dl>
                                                <dl className="dlist-inline small">
                                                    <dt>Color: </dt>
                                                    <dd>Blue color</dd>
                                                </dl>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td>
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="price-wrap">
                                            <var className="price">IDR 499K</var>
                                            <small className="text-muted">(IDR lorem ipsum)</small>
                                        </div> {/* price-wrap .// */}
                                    </td>
                                    <td className="text-right">
                                        <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-outline-success" data-toggle="tooltip"> <i className="fa fa-heart"></i></a>
                                        <a href="" className="btn btn-outline-danger btn-round"> × Remove</a>
                                    </td>
                                    <tr />
                                    <tr>
                                        <td>
                                            <figure className="media">
                                                <div className="img-wrap"><img src="img1/jaket2.jpg" className="img-thumbnail img-sm" /></div>
                                                <figcaption className="media-body">
                                                    <h6 className="title text-truncate">Naples Black Suede Jacket </h6>
                                                    <dl className="dlist-inline small">
                                                        <dt>Size: </dt>
                                                        <dd>M</dd>
                                                    </dl>
                                                    <dl className="dlist-inline small">
                                                        <dt>Color: </dt>
                                                        <dd>Black color</dd>
                                                    </dl>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div className="price-wrap">
                                                <var className="price">IDR 499K</var>
                                                <small className="text-muted">(IDR lorem ipsum)</small>
                                            </div> {/* price-wrap .// */}
                                        </td>
                                        <td className="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-outline-success" data-toggle="tooltip"> <i className="fa fa-heart"></i></a>
                                            <a href="" className="btn btn-outline-danger btn-round"> × Remove</a>
                                        </td>
                                    </tr>
                                    <tbody />
                                    <table />
                                </div>

                            </main>
                            <aside className="col-sm-3">
                                <p className="alert alert-success">Add IDR 100k of eligible items to your order to qualify for FREE Shipping. </p>
                                <dl className="dlist-align" />
                                <dt>Total price: </dt>
                                <dd className="text-right">IDR 1,397K</dd>
                                <dl />
                                <dl className="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd className="text-right">IDR 100K</dd>
                                </dl>
                                <dl className="dlist-align h4">
                                    <dt>Total:</dt>
                                    <dd className="text-right"><strong>IDR 1,297K</strong></dd>
                                </dl>
                                <hr />
                                <figure className="itemside mb-3">
                                    <aside className="aside"><img src="MyCartcss/images/icons/pay-visa.png" /></aside>
                                    <div className="text-wrap small text-muted">
                                        Pay IDR 100K ( Save IDR 50K )
                                        By using BCA Cards
                                    </div>
                                </figure>
                                <figure className="itemside mb-3">
                                    <aside className="aside"> <img src="MyCartcss/images/icons/pay-mastercard.png" /> </aside>\
                                    <div className="text-wrap small text-muted">
                                        Pay by MasterCard and Save 40%. <br />
                                        Lorem ipsum dolor
                                    </div>
                                </figure>
</aside>
                                </div>

                    </div>
                    </div>
                

                {/* SECTION CONTENT END */}

                {/* SECTION */}
                <section className="section-name bg-white padding-y">
                    <div className="container">
                        <header className="section-heading">
                            <h2 className="title-section">Detail your Cart</h2>
                        </header>{/* sect-heading */}

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>{/* container // */}
                </section>
                {/* ========================= SECTION  END// ========================= */}

                {/* ========================= SECTION  ========================= */}
                <section className="section-name bg padding-y">
                    <div className="container">
                        <h4>Another section if needed</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>{/* container // */}
                </section>
                {/* ========================= SECTION  END// ========================= */}

                {/* ========================= FOOTER ========================= */}
                <footer className="section-footer bg-secondary">
                    <div className="container">
                        <section className="footer-top padding-top">
                            <div className="row">
                                <aside className="col-sm-3 col-md-3 white">
                                    <h5 className="title">Customer Services</h5>
                                    <ul className="list-unstyled">
                                        <li> <a href="">Help center</a></li>
                                        <li> <a href="">Money refund</a></li>
                                        <li> <a href="">Terms and Policy</a></li>
                                        <li> <a href="">Open dispute</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-sm-3  col-md-3 white">
                                    <h5 className="title">My Account</h5>
                                    <ul className="list-unstyled">
                                        <li> <a href=""> User Login </a></li>
                                        <li> <a href=""> User register </a></li>
                                        <li> <a href=""> Account Setting </a></li>
                                        <li> <a href=""> My Orders </a></li>
                                        <li> <a href=""> My Wishlist </a></li>
                                    </ul>
                                </aside>
                                <aside className="col-sm-3  col-md-3 white">
                                    <h5 className="title">About</h5>
                                    <ul className="list-unstyled">
                                        <li> <a href=""> Our history </a></li>
                                        <li> <a href=""> How to buy </a></li>
                                        <li> <a href=""> Delivery and payment </a></li>
                                        <li> <a href=""> Advertice </a></li>
                                        <li> <a href=""> Partnership </a></li>
                                    </ul>
                                </aside>
                                <aside className="col-sm-3">
                                    <article className="white">
                                        <h5 className="title">Contacts</h5>
                                        <p>
                                            <strong>Phone: </strong> +123456789 <br />
                                            <strong>Fax:</strong> +123456789
                                        </p>

                                        <div className="btn-group white">
                                            <a className="btn btn-facebook" title="Facebook" target="_blank" href="#"><i className="fab fa-facebook-f  fa-fw"></i></a>
                                            <a className="btn btn-instagram" title="Instagram" target="_blank" href="#"><i className="fab fa-instagram  fa-fw"></i></a>
                                            <a className="btn btn-youtube" title="Youtube" target="_blank" href="#"><i className="fab fa-youtube  fa-fw"></i></a>
                                            <a className="btn btn-twitter" title="Twitter" target="_blank" href="#"><i className="fab fa-twitter  fa-fw"></i></a>
                                        </div>
                                    </article>
                                </aside>
                            </div> {/* row */}
                            <br />
                        </section>
                        <section className="footer-bottom row border-top-white">
                            <div className="col-sm-6">
                                <p className="text-white-50"> Made with love <br />  by Pro-motion.id</p>
                            </div>
                            <div className="col-sm-6 text-right">
                                <p className="text-sm-right text-white-50">
                                    Copyright &copy 2018 <br />
                                    <a href="" className="text-white-50">Pro-motion.id</a>
                                </p>
                            </div>
                        </section> {/* footer-top */}
                    </div>{/* container */}
                </footer>
                {/* ========================= FOOTER END // ========================= */}



            </React.Fragment>
        )
    }
}
export default MyCart;