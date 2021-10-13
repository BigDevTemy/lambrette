import { ADD_TO_CART,UPDATE_SUCCESS } from "../../constants/actionTypes";
import React from "react";
const cart =(state,{payload,type})=>{
    switch(type){

        case ADD_TO_CART:
            return {
                ...state,
                cart:{
                   ...state.cart,
                   cart_data:[...state.cart.cart_data.concat(payload)],
                   success:true
                }
            }

        case UPDATE_SUCCESS:
            return{
                ...state,
                cart:{
                    ...state.cart,
                    success:false
                }
            }

            

        default:
            return state;
    }
}

export default cart