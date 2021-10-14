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
import { useHistory } from "react-router";
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
    const [mycartItems, setmycartItems] = useState([]);
    
    const  cart = localStorage.getItem("cart");
    const pcart = JSON.parse(cart) != null ? JSON.parse(cart) : [];
    const history = useHistory();
    const Cart = (data)=>{
        const items = {
            product_name:data.product_name,
            product_category:data.category_name
        }
        if(!localStorage.getItem('cart')){
            pcart.push(items)
            localStorage.setItem('cart',JSON.stringify(pcart))
            console.log('local',localStorage.getItem('cart'))
        }
        else{
            
            var oldItems = JSON.parse(localStorage.getItem('cart'));
            oldItems.push(items);
            // console.log('oldItems',oldItems)
            localStorage.setItem('cart', JSON.stringify(oldItems));
            console.log('local',localStorage.getItem('cart'))
        }
        addToCart(items)(cartDispatch)
        
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
            history.push('/boulos/view/cart')

            }
          })

    }
   
    const saveToCart = ()=>{

        if(modalData.product_name && modalData.category_name && choose && choosesubapplication && requiredtemp && vanbox && boxvolume ){
            const items = {
                product_name:modalData.product_name,
                product_category:modalData.category_name,
                application:choose,
                subapplication:choosesubapplication,
                requiredtemp:requiredtemp,
                vanbox:vanbox,
                boxvolume:boxvolume
            }
            
                if(!localStorage.getItem('cart')){
                    pcart.push(items)
                    localStorage.setItem('cart',JSON.stringify(pcart))
                    console.log('local',localStorage.getItem('cart'))
                }
                else{
                    
                    var oldItems = JSON.parse(localStorage.getItem('cart'));
                    oldItems.push(items);
                    // console.log('oldItems',oldItems)
                    localStorage.setItem('cart', JSON.stringify(oldItems));
                    console.log('local',localStorage.getItem('cart'))
                }
            
             
            

            addToCart(items)(cartDispatch)


            
        }
        
    }
    const {value} = chooseApplicationState;



    return(

        <div className="mainDiv">
                
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
                                <Image src={Image3} className="DivCardImage" />
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
                                <div className="viewdetails_btn" onClick={()=>{Cart(d);}}>View Details</div>
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