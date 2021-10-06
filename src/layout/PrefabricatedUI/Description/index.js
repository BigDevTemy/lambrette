import React from "react";
import { Image } from "react-bootstrap";
import Image1 from '../../../assets/images/banner/image1.png'
import Image2 from '../../../assets/images/banner/image2.png'
import Image3 from '../../../assets/images/banner/image3.png'
import Checked from '../../../assets/images/banner/checked.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
const index = ()=>{
    return(
        <div>
            <div className="description">
                <div className="imageDiv_fab_desc">
                    <div><Image src={Image1} className="fab_image" /></div> 
                    <div className="divSplit">
                        <div><Image src={Image2} className="small_fab_image" /></div>
                        <div><Image src={Image3} className="small_fab_image_i"/></div>
                    </div>
                </div>
                <div className="more_details">
                    <h2>Description</h2>
                    <div>
                        <p>The Prefabricated Cold Chain solution  was tailor made to suit all your cooling needs.</p>
                        <p><Image src={Checked} className="description_list"/><span>Heat Insulation Factor K=0.33W/m*k</span></p>
                        <p><Image src={Checked} className="description_list"/><span>Food grade antibacterial material</span></p>
                        <p><Image src={Checked} className="description_list"/><span>Reduce fuel consumption by 10%</span></p>
                        <p><Image src={Checked} className="description_list"/><span>Improve transport efficiency by 30%</span></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default index;