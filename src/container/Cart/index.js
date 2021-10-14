import React from "react";
import CartUI from "../../layout/Cart";
import Header from '../../component/Header'
const myCart = ()=>{
    return(
        <div className="cartMainDiv">
            <Header/>
            <CartUI/>
        </div>
    )
}

export default myCart;

