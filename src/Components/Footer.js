import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (

            <footer>
                <div className="container-fluid pt-5 bg-black text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <h5>Address</h5>
                                </div>
                                <div className="row mb-4">
                                    <div id="footerunderline" className="underline bg-light"></div>
                                </div>
                                <p className="text-left">Sinarmas MSIG Tower, Jalan Jendral Sudirman, RT.10/RW.1, Kuningan, Karet, South Jakarta City, Jakarta, Indonesia</p>
                            </div>


                            <div className="col-md-3">
                                <div className="row">
                                    <h5>Link</h5>
                                </div>
                                <div className="row mb-4">
                                    <div id="footerunderline" className="underline bg-light"></div>
                                </div>
                                <div className="row">
                                    <div className="media">
                                        <div className="media-body ml-2">
                                            <h6 className="text-left">Download for Android</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3 mb-5">
                                    <div className="media">
                                        <div className="media-body ml-2">
                                            <h6 className="text-left">Download for IOS</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h5>Feedback</h5>
                                </div>
                                <div className="row mb-4">
                                    <div id="footerunderline" className="underline bg-light"></div>
                                </div>
                                <div className="row mt-2 mb-5">
                                    <div className="media">
                                        <div className="media-body ml-2">
                                            <h6 className="text-left">Please send us your ideas, bug reports, suggestions! Any feedback would be appreciated.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="google-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.401645869872!2d106.82010061436043!3d-6.210639462562853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e324564963%3A0xb876e32ffae855e4!2sSinarmas+MSIG+Tower!5e0!3m2!1sid!2sid!4v1544207139507" width="500" height="300" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe></div>
                            </div>

                            <div className="row mb-2">
                                <div className="underline footer-line"></div>
                            </div>

                        </div>
                        <div id="pro" className="Copyrights pb-3">
                            <i>© Copyrights 2018. Pro-Motion.id. All Rights Reserved.</i>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
export default Footer;