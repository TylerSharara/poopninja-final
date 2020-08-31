import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top justify-content-between">
            <Link to={"/"} className="navbar-brand">PoopNinja</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/services"} className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link">Contact Us</Link>
                            </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;