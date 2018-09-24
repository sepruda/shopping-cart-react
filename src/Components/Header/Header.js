import React from "react";

import moon from '../../assets/moon.jpg'
import './Header.css';

const Header = props => (
    <div className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            {/* <img src={moon} width="30" height="30" alt="Moon logo" /> */}
            Gibbous Moon Board Games
        </a>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <button className="nav-link btn-dark">Wish List</button>
            </li>
            <li className="nav-item">
                <button className="btn-dark nav-link ">Cart</button>
            </li>
            
        </ul>
    </div>
);

export default Header;
