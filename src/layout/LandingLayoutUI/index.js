import React from 'react';
import { Image } from 'react-bootstrap';
import '../../assets/css/main.css'
import Demo1 from '../../assets/images/demo_1.png'
import Demo2 from '../../assets/images/demo_2.png'
import Demo3 from '../../assets/images/demo_3.png'
const index = ()=>{
    return(
        <div className="landingUIDiv">
            <div className="ChildDiv">
                
                <div className="bannerText">
                   <h1 className="newDispensation">Welcome To a new Dispensation</h1>
                   <p className="leverageClass">We are leveraging on the power of technology to bring a revolution of new age technical solution</p>
                   <div className="btn-customize">View Details</div>
                </div>
                <div className="demoImageDiv">
                   <Image src={Demo1}  className="demoImage"/>
                   <div>
                       <Image src={Demo2} className="demoImageII"/>   
                       <Image src={Demo3} className="demoImageIII"/> 
                   </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default index;