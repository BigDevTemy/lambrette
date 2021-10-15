import React, { useEffect, useState } from "react";
import {Image,Icon} from 'semantic-ui-react';
import Checked from '../../../assets/images/banner/checked.png'
const Index =(data)=>{
   const{details}= data
    console.log('Detaisl',details)
    
    return (
        <div>
            <div className="description-details-title"><h1>Product Details</h1> <div><Icon name="arrow left"/>Back</div></div>
            {details && 
                    <div className="description-details">
                
                    <div className="contentDIV">
    
                        <Image src={`https://boulos.ng/lamberet/products/${details.image_url}`} className="categoryImage"/>
                    </div>
                    <div className="contentDIV">
                        <div className="description-details-title"><h1>Features of {details.product_name}</h1></div>
                    
                        <div className="containText" >
                            <div className="content">The Prefabricated Cold Chain solution  was tailor made to suit all your cooling needs.</div>
                            <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>Heat Insulation Factor K=0.33W/m*k</span></div>
                            <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>Heat Insulation Factor K=0.33W/m*k</span></div>
                            <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>Heat Insulation Factor K=0.33W/m*k</span></div>
                            <div className="content"><Image src={Checked} className="description_list"/><span style={{alignSelf:'center'}}>Heat Insulation Factor K=0.33W/m*k</span></div>
                            
                        </div>
                
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Index;