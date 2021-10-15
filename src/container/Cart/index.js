import React, { useEffect, useState } from "react";
import CartUI from "../../layout/Cart";
import Header from '../../component/Header'
import Footer from '../../component/Footer'
const MyCart = ()=>{
   const [cartLength, setcartLength] = useState();
   const callback = (store)=>{
       setcartLength(store)
   }
   console.log('Parent',cartLength)
    return(
        <div className="cartMainDiv">
            <Header store={cartLength}/>
            <CartUI  currentCart={callback}/>
            <Footer/>
        </div>
    )
}

export default MyCart;

