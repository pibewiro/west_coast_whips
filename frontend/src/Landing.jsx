import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Landing extends Component {
    render() {
        return (
            <div>
                <div id="navbar">
                    <div className="navbar-container">
                        <h1>West Coast Whips</h1>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/cars">Cars</Link>
                            </li>

                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="showcase">
                    <div className="showcase-content">
                        <h1>West Coast Whips</h1>
                            <div className="btn-div">
                                <button class="btn">Login</button>
                                <button class="btn">Register</button>
                            </div>
                    </div>
                </div>

                <div id="info-content">
                    <div>
                        <img src="car.jpg" alt=""/>
                        <h2>Cars</h2>
                    </div>

                    <div>
                        <img src="truck.jpg" alt=""/>
                        <h2>Trucks</h2>
                    </div>

                    <div>
                        <img src="suv.jpg" alt=""/>
                        <h2>SUVs</h2>
                    </div>
                </div>

                <div id="special">
                    <h1>Recieve Specialties</h1>

                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text"/>
                        </div>

                        <div className="btn-div">
                            <button className="btn2">Enter</button>
                        </div>
                    </form>
                </div>

                <div id="footer">
                    <p>Copright &copy; 2019</p>
                </div>
            </div>
        )
    }
}