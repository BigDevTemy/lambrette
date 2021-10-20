import React from "react";
import Checked from '../../../assets/images/banner/checked.png'
import { Image } from "react-bootstrap";
import image1 from '../../../assets/images/feature/Image1.png'
import image2 from '../../../assets/images/feature/Image2.png'
import image3 from '../../../assets/images/feature/Image3.png'
import { Icon } from "semantic-ui-react";
import Insulationbox from '../../../assets/images/feature/insulation_box.JPG'
import Insulation_1 from '../../../assets/images/feature/insulation_1.JPG'
import Insulation_2 from '../../../assets/images/feature/insulation_2.JPG'
import Insulation_3 from '../../../assets/images/feature/insulation_4.JPG'
// import 'bootstrap/dist/css/bootstrap.min.css';
const index = ()=>{
    return (
        <div className="insulation_product_features">
           <h1>Product Features</h1>
           <div className="insulationMain">
                <div className="insulationMain_firstDiv">
                    <Image src={Insulationbox} style={{width:"100%"}}/>
                </div>
                <div className="insulationMain_secondDiv">
                    <p><Icon name="check circle"/>Lighter carriages, better insulation performance</p>
                    <p><Icon name="check circle"/> Heat Insulation factor K=0.33W/&#x33A1;*K</p>
                    <p><Icon name="check circle"/>Food grade antibacterial material</p>
                    <p><Icon name="check circle"/>Reduce fuel consumption by 10%</p>
                    <p><Icon name="check circle"/>Improve transport effiency by 30%</p>

                </div>
           </div>
           <div className="insulationMain">
                <div className="insulation_box_div">
                    <h3>Operational and Simple Lock</h3>
                     <Image src={Insulation_1} style={{width:"70%"}}/>
                </div>
                <div className="insulation_box_div">
                        <h3>Aerodynamic Shape</h3>
                        <Image src={Insulation_2} style={{width:"70%"}}/>
                </div>
                <div className="insulation_box_div">
                        <h3>Secured Movable Door</h3>
                        <Image src={Insulation_3} style={{width:"70%"}}/>
                </div>
           </div>
        </div>
    )
}

export default index;