import React from "react";
import { Image } from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import { Facebook,Instagram,Google,Linkedin,Github,Twitter} from "react-bootstrap-icons";

const index = ()=>{
    return(
        <div className="footer">
            <div className="social-media h5">
                <div>Get Connected with us on social network</div>
                <div className="socialmedia-icon">
                    <span><Facebook/></span>
                    <span><Instagram/></span>
                    <span><Google/></span>
                    <span><Linkedin/></span>
                    <span><Github/></span>
                    <span><Twitter/></span>
                </div>
            </div>
           <div className="footer-tab">
               <div>
                   <Image  src={logo}/>
               </div>
               <div className="footer_ourproducts">
                  <h5> Our Products</h5>
                  <div className="mt-4"><a href="/boulos/prefabricated/cold/chain" style={{color:'#fff'}}>Prefabricated Cold Chain</a></div>
                  <div><a href="/boulos/cooling/units" style={{color:'#fff'}}>Cooling Unit</a></div>
                  <div><a href="/boulos/insulation/panel" style={{color:'#fff'}}>Insulation</a></div>
                  
               </div>
               <div className="footer_ourproducts">
                   <h5>Services</h5>
                   <div className="mt-4"><a href="" style={{color:'#fff'}} >Consultation</a></div>
                  <div><a href="" style={{color:'#fff'}}>After Sales </a></div>
                  <div><a href="" style={{color:'#fff'}}>Cold Chain</a></div>
                  
               </div>
               <div className="footer_ourproducts">
                   <h5>Contact Us</h5>
                   <div><a href="" style={{color:'#fff'}}>Email Address:contact@boulos.ng</a></div>
                   
               </div>
               
           </div>
          
        </div>
    )
}

export default index;