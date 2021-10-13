import React, { useContext, useEffect, useState } from "react";
import { Alert, Image } from "react-bootstrap";
import Image1 from '../../../assets/images/feature/Feautured_1.png'
import Image2 from '../../../assets/images/feature/Feautured_2.png'
import Image3 from '../../../assets/images/feature/Feautured_3.png'
import Image4 from '../../../assets/images/feature/Feautured_4.png'
import AddToCart from '../../../assets/images/add.png'
import Selected1 from '../../../assets/images/ourproducts/selected1.png'
import 'semantic-ui-css/semantic.min.css'
import { GlobalContext } from "../../../context/Provider";
import { Modal, Button , Image as SemanticImage, Header, Select,Dropdown,Card,Placeholder} from 'semantic-ui-react';
import subcategoryList from "../../../context/reducers/subcategorylist";
import modalList from "../../../context/actions/category/modalList";
import addToCart from "../../../context/actions/category/addToCart";
import Swal from "sweetalert2";
import updateSuccess from "../../../context/actions/category/updateSuccess";
const Specification = ({loading,data})=>{
    const {subcategoryListState,subcategoryListDispatch} = useContext(GlobalContext)
    const {cartState,cartDispatch} = useContext(GlobalContext)
    const {modalListdata:{modal_loading}} = subcategoryListState
    const {modalListdata:{modal_data}} = subcategoryListState
    
    const {cart:{success}} = cartState
    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const [chooseApplicationState, setChooseApplication] = useState([])
    const [choose, setChoose] = useState("")
    const [subapplication,setsubapplication]=useState([]);
    const [choosesubapplication, setChoosesubapplication] = useState("")
    const [requiredtemp, setRequiredtemp] = useState("")
    const [vanbox, setVanBox] = useState("")
    const [boxvolume, setBoxvolume] = useState("")
    const [viewmore, setviewmore] = useState(false);
    const [display, setdisplay]= useState('flex');
    const [viewmoredisplay, setviewmoredisplay] = useState('flex');
    const [DisabledBTN,setDisabledBTN] =  useState(true);
   
    console.log('cartState',cartState)
   
    const Cart = (data)=>{
        
       setOpen(true);
       setModalData(data) 
       modalList(data)(subcategoryListDispatch)
    }
    useEffect(()=>{
        
        switch(modalData.product_name){
            case "LK-180/LK-200":
                setBoxvolume('3~6');
            case "LK-280":
                setBoxvolume("7~10");
            case "LK-380":
                setBoxvolume("11~15");
            case "LK-480":
                setBoxvolume("16~19");
            case "LK-580":
                setBoxvolume("20~26");
            case "LK-600":
                setBoxvolume("24~28");
            case "LK-680":
                setBoxvolume("30~40");
            case "LK-780":
                setBoxvolume("40~53");
            
        }
        if(modal_data && modal_data.length > 0){
           setChooseApplication(modal_data.map((x,index) => {
            return { key: index, text: x.sub_category_name, value: x.sub_category_name };
          }))
        }

        console.log('Suucess',success)
            if(success){
                setChoose("");
                setsubapplication("");
                setRequiredtemp("");
                setVanBox("");
                setBoxvolume("")
                setOpen(false);
                
                Swal.fire({
                    title: 'Specification Added To Cart',
                    text: "Click on View to check your cart",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#064269',
                    cancelButtonColor: '#e6e6e6',
                    confirmButtonText: 'View Cart'
                  }).then((result) => {
                    if (result.isConfirmed) {
                    //   Swal.fire(
                    //     'Deleted!',
                    //     'Your file has been deleted.',
                    //     'success'
                    //   )

                    }
                  })
                  updateSuccess()(cartDispatch)
                  
            }
    },[modal_data,success])



    const handleChooseApplication = (e,data) =>{
        setChoose(data.value);
        setVanBox("")
        setRequiredtemp("")
        modal_data.filter(d=>d.sub_category_name == data.value).map((x,index)=>{
            
            const arr = x.sub_category_type.split(',');
            setsubapplication(arr.map((y,index)=>{
                return {key:index,text:y,value:y}
            }))
        });

    }

    const handleSubApplication = (e,data)=>{
        setChoosesubapplication(data.value);
        modal_data.filter(d=>d.sub_category_name == choose).map((x,index)=>{
            console.log('Choose',x)
            const arr_sub_app = x.sub_category_type.split(',');
            const arr_req_temp = x.required_temperature.split(',');
            
            const d_value = arr_sub_app.indexOf(data.value)
            setRequiredtemp(arr_req_temp[d_value])
            setVanBox(x.van_box_type)
            
            // const arr = x.sub_category_type.split(',');
            // setsubapplication(arr.map((y,index)=>{
            //     return {key:index,text:y,value:y}
            // }))
        });
    }
    const saveToCart = ()=>{

        if(modalData.product_name && modalData.category_name && choose && choosesubapplication && requiredtemp && vanbox && boxvolume ){
            const items = {
                product_category:modalData.product_name,
                product_category:modalData.category_name,
                application:choose,
                subapplication:choosesubapplication,
                requiredtemp:requiredtemp,
                vanbox:vanbox,
                boxvolume:boxvolume
            }
            
            addToCart(items)(cartDispatch)
            
        }
        
    }
    const {value} = chooseApplicationState;



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
                                                <Select placeholder='Choose Application'
                                                  style={{width:'100%',borderRadius:12}}
                                                  options={chooseApplicationState}
                                                  onChange={handleChooseApplication}
                                                  value={choose}
                                                  />
                                                   {/* <Dropdown
                                                        placeholder='Select Country'
                                                        fluid
                                                        search
                                                        selection
                                                        options={countryOptions}
                                                    /> */}
                                            </div>
                                            <div className="selectCustomII">
                                                <Select placeholder='Choose Sub Application' options={subapplication} onChange={handleSubApplication} value={choosesubapplication}  style={{borderRadius:12,width:'50%',color:'#000'}}/>
                                                {/* <Select placeholder='Required Temperature' value={requiredtemp}  style={{borderRadius:12,marginLeft:10,width:'50%'}}/> */}
                                                <input type="text" placeholder="Required Temperature" value={requiredtemp} style={{paddingLeft:5,borderRadius:12,marginLeft:10,width:'50%'}} />
                                            </div>
                                            <div className="selectCustomII">
                                                {/* <Select placeholder='Van Box Type' value={vanbox}  style={{borderRadius:12,fontSize:12,width:'50%'}}/> */}
                                                <input type="text" placeholder="Van Box Type" value={vanbox} style={{borderRadius:12,marginLeft:10,padding:10,width:'50%'}} />
                                                <input type="text" placeholder="Box Volume" value={boxvolume} style={{borderRadius:12,marginLeft:10,width:'50%',padding:10}} />
                                                {/* <Select placeholder='Box Volume'  style={{borderRadius:12,marginLeft:10, paddingLeft:10,width:'50%'}}/> */}
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
                                    onClick={()=>{saveToCart()}}
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
            
            <div style={{display:display,flexWrap:'wrap',justifyContent:'space-between'}}>
                {data && data.length > 0 ? data.slice(0,6).map((d)=>{
                   return  <div className="DivCard" style={{ flex: '0 0 30%',marginBottom:20}}>
                                <Image src={Image2} className="DivCardImage" />
                                <div className="productTitle">
                                    <div >
                                        {d.product_name}
                                    </div>
                                    <div>
                                        <div className="circular"  onClick={()=>{Cart(d);}}>
                                            <Image src={AddToCart} style={{width:10,height:10,alignSelf:'center'}} />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="viewdetails_btn" onClick={()=>{Cart(d);}}>Add To Cart</div>
                            </div> 
                }) 
                :<div><h3>No Product Found</h3></div>}

            </div>
        {data && data.length > 6 ? <div className="viewmore_cover" style={{display:viewmoredisplay}}  onClick={()=>{setviewmore(true);setdisplay('none');setviewmoredisplay('none')}}>
            <div className="viewmore_btn" >View More</div>
        </div>
        :null}
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        {viewmore && 
                data.map((d)=>{
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
            }
        </div>
       
        </div>
        
    )
}

export default Specification;