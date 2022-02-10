import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
    return <nav className="navigation-bar">
        <div className="navigation-center">
            <Link to="/">
                <img src={logo} alt="Cocktail db Logo" className="logo-img" />
            </Link>
            <ul className="navigation-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar;