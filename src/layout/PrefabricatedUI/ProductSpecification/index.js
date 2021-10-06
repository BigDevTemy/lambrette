import React, { useEffect, useState } from "react";
import { Alert, Image } from "react-bootstrap";
import Image1 from '../../../assets/images/feature/Feautured_1.png'
import Image2 from '../../../assets/images/feature/Feautured_2.png'
import Image3 from '../../../assets/images/feature/Feautured_3.png'
import Image4 from '../../../assets/images/feature/Feautured_4.png'
import AddToCart from '../../../assets/images/add.png'
import Selected1 from '../../../assets/images/ourproducts/selected1.png'
import 'semantic-ui-css/semantic.min.css'
import { Modal, Button , Image as SemanticImage, Header, Select} from 'semantic-ui-react';

const Specification = ()=>{
    const [open, setOpen] = useState(false)
    const Cart = ()=>{

       setOpen(true)

    }


    return(

        <div className="mainDiv">
                <div>
                    <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    >
                    <Modal.Header>Make Order</Modal.Header>
                    <Modal.Content>
                        <div style={{display:'flex',justifyContent:"space-between",padding:10,textAlign:'left'}}>
                            <div style={{width:'40%'}}>
                                <Image src={Selected1} style={{width:'100%',height:'80%'}} />
                            </div>
                            <div style={{width:'100%'}}>
                                <div className="topModal" >
                                    <div>Product Category: Prefabricated Cold Chain Colution</div>
                                    <div style={{marginTop:10}}>Product Name: LK-180 / LK-200</div>
                                </div>
                                <div className="selectCustom">
                                    <Select placeholder='Choose Application'  style={{width:'100%',borderRadius:12}}/>
                                </div>
                                <div className="selectCustomII">
                                    <Select placeholder='Choose Sub Application'  style={{borderRadius:12,width:'50%',color:'#000'}}/>
                                    <Select placeholder='Required Temperature'  style={{borderRadius:12,marginLeft:10,width:'50%'}}/>
                                </div>
                                <div className="selectCustomII">
                                    <Select placeholder='Van Box Type'  style={{borderRadius:12,fontSize:12,width:'50%'}}/>
                                    <Select placeholder='Box Volume'  style={{borderRadius:12,marginLeft:10,width:'50%'}}/>
                                </div>
                                <div style={{marginTop:'20%',textAlign:'right',bottom:0}}>
                                    <Button color='black' onClick={() => setOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button
                                    content="Save Order"
                                    labelPosition='right'
                                    icon='checkmark'
                                    onClick={() => setOpen(false)}
                                    positive
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                    
                    </Modal>
                </div>
            <h1>Product Specification</h1>
            <div className="P_specifcation">
               
                <div className="DivCard">
                    <Image src={Image1} className="DivCardImage"/>
                    <div className="productTitle">
                        <div>
                            LK-180/LK-200
                        </div>
                        <div>
                            <div className="circular" onClick={()=>{Cart()}}>
                                <Image src={AddToCart} style={{width:10,height:10}} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="viewdetails_btn">View Details</div>
                </div>
                <div className="DivCard">
                    <Image src={Image2} className="DivCardImage" />
                    <div className="productTitle">
                        <div >
                            LK-280
                        </div>
                        <div>
                            <div className="circular">
                                <Image src={AddToCart} style={{width:10,height:10}}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="viewdetails_btn">View Details</div>
                </div>
                <div className="DivCard">
                    <Image src={Image4} className="DivCardImage"/>
                    <div className="productTitle">
                        <div>
                            LK-380
                        </div>
                        <div>
                            <div className="circular">
                                <Image src={AddToCart} style={{width:10,height:10}}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="viewdetails_btn">View Details</div>
                </div>
                <div className="DivCard">
                    <Image src={Image3} className="DivCardImage"/>
                    <div className="productTitle">
                        <div>
                            LK-480
                        </div>
                        <div>
                            <div className="circular">
                                <Image src={AddToCart} style={{width:10,height:10}} onClick={()=>{Cart()}}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="viewdetails_btn">View Details</div>
                </div>
                <div>
                    
                </div>
                
            
        </div>
        <div className="viewmore_cover">
            <div className="viewmore_btn">View More</div>
        </div>

        </div>
        
    )
}

export default Specification;