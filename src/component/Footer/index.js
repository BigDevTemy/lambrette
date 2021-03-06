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
                    <span><a href="https://www.facebook.com/BoulosEnterprisesLimited" style={{color:'#fff'}}><Facebook/></a></span>
                    <span><a href="https://www.instagram.com/boulosenterpriseslimited/" style={{color:'#fff'}}><Instagram/></a></span>
                    <span><Google/></span>
                    <span><a href=" https://www.linkedin.com/company/boulos-enterprises-ltd/mycompany/" style={{color:'#fff'}}><Linkedin/></a></span>
                    
                    <span><a href="https://twitter.com/boulos_ent_ltd" style={{color:'#fff'}}><Twitter/></a></span>
                </div>
            </div>
           <div className="footer-tab">
               <div>
                   <Image  src={logo}/>
                   <address>
                    Boulos Enterprises Limited Plot 10, Block D Acme road,<br/> Ogba P.O. Box 241 Ikeja, Lagos.<br/>
                    Sales Team Contact: 0903 386 4676<br/>
                    Contact Email:contact@boulos.ng
                   </address>
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