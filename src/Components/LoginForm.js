import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    render() {
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            {/* buat 2 col of 6  */}
                            <div className="row" style={{marginTop: "120px", boxShadow: "-1px 1px 50px 10px black"}}>
                                <div className="col-md-6">
                                    <ul>
                                        <a href="" style={{borderBottom: "2px solid #f44c89", padding: "10px"}}>Sign in </a>
                                        <a href="">/ Sign Up</a>
                                    </ul>
                                    <label className="label control-label">User name</label>
                                    <input type="text" className="form-control" name="user" placeholder="User name"/>
                                    <label className="label control-label">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                                    <input className="remember" type="checkbox"/> <small>Remember me ?</small>
                                    <a href=""> <div className="btn btn-info text-uppercase">sign up</div></a>
                                    <p className="text-center text-uppercase forgot">forgot password ?</p>
                                </div>
                                <div className="col-md-6">
                                    <img className="img" src="img1/login image4.jpg" alt="img"/>
                                </div>
                            </div>
                            {/* close  */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
        )
    }
}