import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {Image,Icon} from 'semantic-ui-react';
import Checked from '../../../assets/images/banner/checked.png'
const Index =(data)=>{
   const history = useHistory();
    const {details} = data  
    console.log(details)
    const features = details.product_features.split("_");
    
    
    return (
        <div>
            <div className="description-details-title"><h1>Product Details</h1> </div>
            {details && 
                <div className="description-details">

                    <div className="contentDIV">

                        <Image src={`https://boulos.ng/lamberet/products/${details.image_url}`} className="categoryImage"/>
                    </div>
                    <div className="contentDIV">
                        <div className="description-details-title"><h1>Features of {details.product_name}</h1></div>
                    
                        <div className="containText" >
                            {/* <div className="content">The Prefabricated Cold Chain solution  was tailor made to suit all your cooling needs.</div> */}
                            
                            {/* <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>Rapid cooling capacity with wind speed up to 4.5m/s</span></div>
                            <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>High efficency heat exchanger slow down frosting </span></div>
                            <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>Rustproof aluminum frame lighen self weight </span></div>
                            <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>Equipped with orignally SD-5S11 compressor with long service life</span></div> */}
                            {features && features.length > 0 ? 
                                features.map(d=>{
                                   return  <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>{d}</span></div>
                                })
                            
                            :null}

                            
                        </div>
                        <div style={{width:'100%',textAlign:'right',cursor:'pointer'}} onClick={()=>history.goBack()}><Icon name="arrow left" size="big"/>Back</div>
                    </div>
                </div>
            }
            
            
        </div>
    )
}

export default Index;