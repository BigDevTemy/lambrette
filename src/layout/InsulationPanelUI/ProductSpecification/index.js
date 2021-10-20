import React,{useContext} from "react";
import { Image } from "react-bootstrap";
import { GlobalContext } from "../../../context/Provider";
import Product1 from '../../../assets/images/ourproducts/3.png'
import AddToCart from '../../../assets/images/add.png'
import addToCart from "../../../context/actions/category/addToCart";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
const Index = ()=>{
    const {cartState,cartDispatch} = useContext(GlobalContext)
    const  cart = localStorage.getItem("cart");
    const pcart = JSON.parse(cart) != null ? JSON.parse(cart) : [];
    const history = useHistory();
    const Cart = ()=>{
        const items = {
            product_name:'Insulation Box',
            product_category:'Insulation Panel',
            imageurl:'Insulation Panel.png'
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
    return(
        <div className="insulation_panel_products">
            
            <h2>Products</h2>
            <div style={{marginTop:40}}>
                    <div className="DivCard" style={{ flex: '0 0 30%',marginBottom:20}}>
                                <Image src={Product1} className="DivCardImage" />
                                <div className="productTitle">
                                    <div >
                                        Insulation Panel
                                    </div>
                                    <div>
                                        <div className="circular"  onClick={()=>{Cart();}}>
                                            <Image src={AddToCart} style={{width:10,height:10,alignSelf:'center'}} />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="viewdetails_btn" onClick={()=>{Cart();}}>Add To Cart</div>
                    </div> 
            </div>
            
        </div>
    )
}

export default Index;