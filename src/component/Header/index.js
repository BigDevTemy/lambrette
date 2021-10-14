import React, { useContext } from "react";
import { Navbar,Container,Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.png'
import Image from 'react-bootstrap/Image'
import { List } from 'react-bootstrap-icons';
import { Menu,Icon,Label } from "semantic-ui-react";
import {GlobalContext} from '../../context/Provider';
import '../../assets/css/main.css'
const Header = ()=>{
    const{cartState,cartDispatch} = useContext(GlobalContext);
    console.log('cartStateHeader',cartState)
    const {cart:{cart_data}} = cartState
    return(
        <div>
            <div className="mynav">
                <div className="brandDiv"><Image src={logo} className="logo"/></div>
                <div className="navItems">
                   
                    <div class="dropdown">
                        <div class="dropbtn"><a href="/boulos/exhibition" style={{color:'#000'}}>Home</a></div>
                        
                    </div>
                    <div class="dropdown">
                        <div class="dropbtn">Products</div>
                        <div class="dropdown-content">
                            <a href="/boulos/prefabricated/cold/chain">Prefabricated Cold Chain Solution</a>
                            <a href="/boulos/cooling/units">Cooling Unit</a>
                            <a href="/boulos/insulation/panel">Insulation Panel</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <div class="dropbtn">Services</div>
                        <div class="dropdown-content">
                            <a href="">Consultation</a>
                            <a href="">After Sales</a>
                            
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Solutions</button>
                        <div class="dropdown-content">
                            <a href="">Cold Chain</a>
                            
                        </div>
                    </div>
                    <div>
                        <Link to="/boulos/view/cart">
                            {/* <div>
                            <Image src={cart}  className="cart"/>
                            
                            </div> */}
                            <Menu compact>
                                <Menu.Item as='a'>
                                <Icon name='cart' /> 
                                <Label color='red' floating>
                                    {cart_data.length}
                                </Label>
                                </Menu.Item>
                            </Menu>
                            
                        </Link>
                    </div>

                </div>
                <div className="menu"><List color="black" size={30} /></div>
            </div>
            
        </div>
    )
}

export default Header;