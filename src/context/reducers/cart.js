import { ADD_TO_CART,CLEAR_CART,SAVE_ERROR,SAVE_LOADER,UPDATE_SUCCESS } from "../../constants/actionTypes";
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
        case SAVE_LOADER:{
            return{
                ...state,
                cart:{
                    ...state.cart,
                    save_loader:true
                }
            }
        }
        case CLEAR_CART:
            return{
                ...state,
                cart:{
                    ...state.cart,
                    cart_data:null,
                    success:false,
                    save_loader:false
                }
            }
        case SAVE_ERROR:
            return{
                ...state,
                cart:{
                    ...state.cart,
                    error:payload,
                    save_loader:false,
                }
            }

            

        default:
            return state;
    }
}

export default cart