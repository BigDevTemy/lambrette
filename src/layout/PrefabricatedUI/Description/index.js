import React from "react";
import { Image } from "react-bootstrap";
import Image1 from '../../../assets/images/banner/image1.png'
import Image2 from '../../../assets/images/banner/image2.png'
import Image3 from '../../../assets/images/banner/image3.png'
import Checked from '../../../assets/images/banner/checked.png'

import image4 from '../../../assets/images/feature/Image1.png'
import image5 from '../../../assets/images/feature/Image2.png'
import image6 from '../../../assets/images/feature/Image3.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
const index = ()=>{
    return(
        <div>
            <div className="description">
                <div className="imageDiv_fab_desc">
                    
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div className="listImage_child">
                            <Image src={image4} className="thumbnail_img"/>
                            <Image src={image5} className="thumbnail_img"/>
                            <Image src={image6} className="thumbnail_img"/>
                        </div>
                        <div style={{marginTop:20}}>
                            <h2>Features</h2>
                            <div style={{display:'flex',marginBottom:10}}><Image src={Checked} className="description_list"/><span style={{marginTop:5}}>Operational and Simple Lock</span> </div>
                            <div style={{display:'flex',marginBottom:10}}><Image src={Checked} className="description_list"/><span style={{marginTop:5}}>Aerodynamic Shape</span> </div>
                            <div style={{display:'flex',marginBottom:10}}><Image src={Checked} className="description_list"/><span style={{marginTop:5}}> Secured Moveable Door</span> </div>
                        </div>
                    </div>
                     
                    
                </div>

                <div className="more_details">
                    <h2>Description</h2>
                    <div>
                        <p className="title_description">The Prefabricated Cold Chain solution  was tailor made to suit all your cooling needs.</p>
                        <p><Image src={Checked} className="description_list"/><span className="title_description">Heat Insulation Factor K=0.33W/m*k</span></p>
                        <p><Image src={Checked} className="description_list"/><span className="title_description">Food grade antibacterial material</span></p>
                        <p><Image src={Checked} className="description_list"/><span className="title_description">Reduce fuel consumption by 10%</span></p>
                        <p><Image src={Checked} className="description_list"/><span className="title_description">Improve transport efficiency by 30%</span></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default index;