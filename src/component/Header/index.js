import React, { useContext, useState } from "react";
import { Navbar,Container,Nav } from "react-bootstrap";

import { Link,useLocation } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.png'
import Image from 'react-bootstrap/Image'
import { List } from 'react-bootstrap-icons';
import { Menu,Icon,Label } from "semantic-ui-react";
import {GlobalContext} from '../../context/Provider';
// import './sidebarcss.css'
import '../../assets/css/main.css'
import * as IconReact from 'react-bootstrap-icons';
const Header = ({store})=>{
    const{cartState,cartDispatch} = useContext(GlobalContext);
    const[opensidebar, setopensidebar] = useState();
    const[sidebardata, setsidebardata] = useState();
    const[link, setLink] = useState('none');
    const location = useLocation();
    const locationHash=()=>{
        window.location="https://boulos.ng";
    }
    
    const openDrawer = ()=>{
        setopensidebar('overlay')
        setsidebardata('drawer')
        setLink('inline')
    }

    const closeDrawer = ()=>{
        setopensidebar('')
        setsidebardata('')
        setLink('none')
    }

    return(
        <div>
            <div className={opensidebar}>
                <div className={sidebardata}>
                    <div style={{display:link}} onClick={()=>{closeDrawer()}}>
                        <Icon name="close" size="large" style={{marginTop:50}} />
                        <div style={{marginTop:20}}>
                            <div className="mobile-navItem">Home</div>
                            <div className="mobile-navItem space">Products
                                <ul>
                                    <li><a href="/boulos/prefabricated/cold/chain">Prefabricated Cooling Chain</a></li>
                                    <li><a href="/boulos/cooling/units">Cooling Unit</a></li>
                                    <li><a href="/boulos/insulation/panel">Insulation Panel</a></li>
                                </ul>
                            </div>
                            <div className="mobile-navItem space">Services
                                <ul>
                                    <li>Consultation</li>
                                    <li>After Sales</li>
                                    
                                </ul>
                            </div>
                            <div className="mobile-navItem space">Solution
                            <ul>
                                    <li>Cooling Chain</li>
                                </ul>
                            </div>
                            <div className="space">
                                <Link to="/boulos/view/cart">
                                
                                    <Menu compact>
                                        <Menu.Item as='a'>
                                        <Icon name='cart' /> 
                                        {localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length > 0 ?  <Label color='red' floating>
                                            {store && store.length }
                                            {!store && localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length > 0 ? JSON.parse(localStorage.getItem('cart')).length : null }
                                        </Label> :null}
                                    
                                        </Menu.Item>
                                    </Menu>
                                    
                                </Link>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="mynav">
                <div className="brandDiv" style={{cursor:'pointer'}} onClick={()=>{locationHash()}}><Image src={logo} className="logo"/></div>
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
                        
                            <Menu compact>
                                <Menu.Item as='a'>
                                <Icon name='cart' /> 
                                {localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length > 0 ?  <Label color='red' floating>
                                    {store && store.length }
                                    {!store && localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length > 0 ? JSON.parse(localStorage.getItem('cart')).length : null }
                                </Label> :null}
                               
                                </Menu.Item>
                            </Menu>
                            
                        </Link>
                    </div>

                </div>
                <div className="menu" onClick={()=>{openDrawer()}} ><List color="black" size={30} /></div>
            </div>
            
        </div>
    )
}

export default Header;