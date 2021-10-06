
import Header from "../../component/Header";
import React from "react";
import LandingLayoutUI from '../../layout/LandingLayoutUI'
import Sponsor from '../../layout/LandingLayoutUI/Sponsor'
import Ourproducts from '../../layout/LandingLayoutUI/Ourproduct'
import Footer from '../../component/Footer'
const index = ()=>{
    return(
        
        <div className="landingpageMain">
            <div className="navDiv">
                <Header/>
            </div>
            <div>
                <LandingLayoutUI/>
            </div>
            <div>
                <Sponsor/>
            </div>
            <div>
                <Ourproducts/>
            </div>
            <div className="footerDiv">
                <Footer/>
            </div>
           
            
        </div>
    )
}

export default index;