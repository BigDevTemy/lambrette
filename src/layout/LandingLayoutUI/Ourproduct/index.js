import React from "react";
import { Image } from "react-bootstrap";
import Prefabricated from '../../../assets/images/ourproducts/Prefabricated Cold Chain Solutions.png'
import Pointer from '../../../assets/images/pointer.png'
import coolingunit from '../../../assets/images/ourproducts/coolingunit.png'
import insulator from '../../../assets/images/ourproducts/insulator.png'
import { Link } from "react-router-dom";
const index = ()=>{
    return(
        <div className="ourproducts">
            <h1 className="text-align-left">Our Products</h1>

            <div className="containerProducts">
                <div className="catergoryDIV">
                    <div className="categoryImageDiv">
                     <Image src={Prefabricated} className="categoryImage"/>
                    </div>
                    <div className="productTitle">
                        <div className="title">Prefabricated ColdChain Solutions</div>
                        <div className="pointerDiv"><Link to="/boulos/prefabricated/cold/chain"><Image src={Pointer} className="pointer_size"/></Link></div>
                    </div>
                    
                </div>
                <div className="catergoryDIV">
                    <div className="categoryImageDiv">
                     <Image src={coolingunit} className="categoryImage"/>
                    </div>
                    <div className="productTitle">
                        <div className="title">Cooling Units</div>
                        <div className="pointerDiv"><Link to="boulos/cooling/units"><Image src={Pointer} className="pointer_size"/></Link></div>
                    </div>
                    
                </div>
                <div className="catergoryDIV">
                    <div className="categoryImageDiv">
                     <Image src={insulator} className="categoryImage"/>
                    </div>
                    <div className="productTitle">
                        <div className="title">Insulation Panels</div>
                        <div className="pointerDiv"><Link to="boulos/insulation/panel"><Image src={Pointer} className="pointer_size" /></Link></div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}
export default index;