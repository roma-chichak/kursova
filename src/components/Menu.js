import React from 'react';
import './style.css';


function Menu() {
    return(
        <div className="header__nav">
            <a href="/">
                <img src="img/logo.png" alt="" />
            </a>
            <a href="#shop">OUR SHOP</a>
            <a href="#contact">CONTACT</a>
            <a href="/bin"><img src="img/bin.png" alt="" />
            </a>
        </div>
)
}

export default Menu