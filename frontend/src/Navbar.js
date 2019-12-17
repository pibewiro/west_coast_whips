import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Navbar extends Component {
    render() {
        return (
        <div id="navbar">
            <div className="navbar-container">
                <h1><img class="logo" src="download.png" alt=""/>
                    West Coast Whips</h1>
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
        )
    }
}
