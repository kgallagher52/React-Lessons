import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Jedi Are Strong</a>
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

export default  withRouter(Navbar);

