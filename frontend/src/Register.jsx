import React, { Component } from 'react'
import Navbar from "./Navbar"
import axios from "axios"

export default class Register extends Component {

    constructor()
    {
        super()

        this.state = {
            username:"",
            email:"",
            password:""
        }
    }

    register = e => {
        e.preventDefault()

        const regInfo = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        console.log(regInfo)
    }

    handleUsername = (e) => this.setState({username:e.target.value})
    handleEmail = (e) => this.setState({email:e.target.value})
    handlePassword = (e) => this.setState({password:e.target.value})
    

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
                                    <input type="text" onChange={this.handleUsername} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="text" onChange={this.handleEmail} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Password</label>
                                    <input type="text" onChange={this.handlePassword} />
                                </div>

                                <div className="btn-div">
                                    <button className="btn2" onClick={this.register}>Enter</button>
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
