import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <a className="brand-logo">Jedi Are Strong</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/jedi">Jedi</a></li>


                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

