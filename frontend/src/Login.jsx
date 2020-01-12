import React, { Component } from 'react'
import Navbar from "./Navbar"

export default class Login extends Component {

    constructor()
    {
        super()

        this.state = {
            ue:"",
            errorName:""
        }
    }

    ue = (e) => {
        e.preventDefault();
        alert(123)
    }

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
                                    <label htmlFor="username">Username/Email</label>
                                    <input type="text" id="ue"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Password</label>
                                    <input type="password"/>
                                </div>

                                <div className="btn-div">
                                    <button className="btn2" onClick={this.ue}>Enter</button>
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
