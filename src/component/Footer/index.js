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
                  <div className="mt-4"><a href="">Prefabricated Cold Chain</a></div>
                  <div><a href="">Cooling Unit</a></div>
                  <div><a href="">Insulation</a></div>
                  
               </div>
               <div className="footer_ourproducts">
                   <h5>Useful Links</h5>
                   <div className="mt-4"><a href=""  >Home</a></div>
                  <div><a href="">About us</a></div>
                  <div><a href="">Vechicle</a></div>
                  
               </div>
               <div className="footer_ourproducts">
                   <h5>Contact Us</h5>
                   <div><a href="">Email Address:webdev@outlook.com</a></div>
               </div>
           </div>
          
        </div>
    )
}

export default index;