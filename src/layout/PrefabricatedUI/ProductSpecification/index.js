import React, { useContext, useEffect, useState } from "react";
import { Alert, Image } from "react-bootstrap";
import Image1 from '../../../assets/images/feature/Feautured_1.png'
import Image2 from '../../../assets/images/feature/Feautured_2.png'
import Image3 from '../../../assets/images/feature/Feautured_3.png'
import Image4 from '../../../assets/images/feature/Feautured_4.png'
import AddToCart from '../../../assets/images/add.png'
import Selected1 from '../../../assets/images/ourproducts/selected1.png'
import { Card,Placeholder } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { GlobalContext } from "../../../context/Provider";
import { Modal, Button , Image as SemanticImage, Header, Select} from 'semantic-ui-react';
import subcategoryList from "../../../context/reducers/subcategorylist";
import modalList from "../../../context/actions/category/modalList";

const Specification = ({loading,data})=>{
    const {subcategoryListState,subcategoryListDispatch} = useContext(GlobalContext)
    const {modalListdata:{modal_loading}} = subcategoryListState
    console.log('modal_loading',modal_loading)
    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const Cart = (data)=>{
        
       setOpen(true);
       setModalData(data) 
       modalList(data)(subcategoryListDispatch)
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
                                {modal_loading && (
                                     <Placeholder style={{width:'100%',height:'50vh'}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                )}
                                {!modal_loading && <Image src={Selected1} style={{width:'100%',height:'80%'}} />}
                            </div>
                            <div style={{width:'100%'}}>
                                <div className="topModal" >
                                    <div>Product Category: {modalData && modalData.category_name}</div>
                                    <div style={{marginTop:10}}>Product Name: {modalData && modalData.product_name}</div>
                                </div>
                                <div >
                                {modal_loading && (
                                    <Placeholder fluid style={{marginTop:20,marginLeft:20}}>
                                        <Placeholder.Paragraph>
                                            <Placeholder.Line length="short"/>
                                            
                                            <Placeholder.Line length="long"/>
                                            <Placeholder.Line/>
                                            <Placeholder.Line/>
                                            <Placeholder.Line length="long"/>
                                        </Placeholder.Paragraph>
                                    </Placeholder>
                                )}
                                </div>
                                
                                    {!modal_loading && (
                                        <div>
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
                                         </div>
                                         
                                    )}
                                
                                
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

            <div className="P_specification">
            { loading && 
                      <Card.Group itemsPerRow={3} style={{width:'100%'}}>
                      <Card>
                        <Card.Content>
                          <Placeholder>
                            <Placeholder.Image square />
                            <Placeholder.Line length="long"/>
                            <Placeholder.Line length="small"/>
                          </Placeholder>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Placeholder>
                            <Placeholder.Image square />
                            <Placeholder.Line length="long"/>
                            <Placeholder.Line length="small"/>
                          </Placeholder>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Placeholder>
                            <Placeholder.Image square />
                            <Placeholder.Line length="long"/>
                            <Placeholder.Line length="small"/>
                          </Placeholder>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                        
                    }

            </div>
            
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                {data && data.length > 0 ? data.map((d)=>{
                   return  <div className="DivCard" style={{ flex: '0 0 30%',marginBottom:20}}>
                                <Image src={Image2} className="DivCardImage" />
                                <div className="productTitle">
                                    <div >
                                        {d.product_name}
                                    </div>
                                    <div>
                                        <div className="circular" onClick={()=>{Cart(d);}}>
                                            <Image src={AddToCart} style={{width:10,height:10}} />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="viewdetails_btn">View Details</div>
                            </div> 
                }) 
                :<div><h3>No Product Found</h3></div>}

            </div>
        <div className="viewmore_cover">
            <div className="viewmore_btn">View More</div>
        </div>

        </div>
        
    )
}

export default Specification;