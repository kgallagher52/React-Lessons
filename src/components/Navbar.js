import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <a className="brand-logo">Jedi Are Strong</a>
                <ul className="right">
                {/* Link makes it so the page does not always reload */}
                    <li><Link to="/">Home</Link></li>
                    {/* NavLink Makes it add a active class so you can style it */}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>


                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
