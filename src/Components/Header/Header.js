import React from "react";

import './Header.css';

const Header = props => (
    
    
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Gibbous Moon Board Games
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button 
                        className="nav-link btn-dark"
                        onClick={props.toggleWish}
                        >
                        Wish List{props.wishItems.length ? <span>({props.wishItems.length})</span> : <span></span>}
                    </button>
                </li>
                <li className="nav-item">
                    <button 
                        className="btn-dark nav-link "
                        onClick={props.toggleCart}
                        >
                        Cart{props.cartItems.length ? <span>({props.cartItems.length})</span> : <span></span>}
                    </button>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
