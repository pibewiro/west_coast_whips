import React, { Component } from 'react'
import Navbar from "./Navbar"

export default class Register extends Component {
    render() {
        return (
            <div id="login-content">
                <Navbar />
                <div className="center">
                    <div id="login">
                        <div className="form-div">
                            <h1>Login</h1>
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="text"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Password</label>
                                    <input type="text"/>
                                </div>

                                <div className="btn-div">
                                    <button className="btn2">Enter</button>
                                </div>
                            </form>
                        </div>


                        <div className="login-info">
                            <h1>Checkout 1000s of New cars<br />From all over the USA</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
