import React from "react";
import Checked from '../../../assets/images/banner/checked.png'
import { Image } from "react-bootstrap";
import image1 from '../../../assets/images/feature/Image1.png'
import image2 from '../../../assets/images/feature/Image2.png'
import image3 from '../../../assets/images/feature/Image3.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
const index = ()=>{
    return (
        <div className="featureDiv">
           <div className="list_feature">
                <h1>Features</h1>
                <div style={{display:'flex',marginBottom:10}}><Image src={Checked} className="description_list"/><span style={{marginTop:5}}>Operational and Simple Lock</span> </div>
                <div style={{display:'flex',marginBottom:10}}><Image src={Checked} className="description_list"/><span style={{marginTop:5}}>Aerodynamic Shape</span> </div>
                <div style={{display:'flex',marginBottom:10}}><Image src={Checked} className="description_list"/><span style={{marginTop:5}}> Secured Moveable Door</span> </div>
                
           </div> 

           <div className="listImage">
                    <div className="listImage_child">
                         <Image src={image1} className="thumbnail"/>
                         <Image src={image3} className="thumbnail"/>
                    </div>
                    <div><Image src={image2} className="thumbnail" style={{marginTop:10}}/></div>
           </div>
        </div>
    )
}

export default index;