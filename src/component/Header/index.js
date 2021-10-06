import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.png'
import Image from 'react-bootstrap/Image'
import { List } from 'react-bootstrap-icons';
import '../../assets/css/main.css'
const Header = ()=>{
    return(
        <div>
            <div className="mynav">
                <div className="brandDiv"><Image src={logo} className="logo"/></div>
                <div className="navItems">
                    <div><a href="#">Home</a></div>
                    <div><a href="#">About</a></div>
                    <div><a href="#">Vechicle</a></div>
                    <div><a href="#">After Sales</a></div>
                    <div><Image src={cart}  className="cart"/></div>
                </div>
                <div className="menu"><List color="black" size={30} /></div>
            </div>
            
        </div>
    )
}

export default Header;