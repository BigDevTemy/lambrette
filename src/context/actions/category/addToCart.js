import { ADD_TO_CART } from "../../../constants/actionTypes"

export default (items)=>(dispatch)=> {
    console.log('cart function',items)
    dispatch({
        type:ADD_TO_CART,
        payload:items
    })

}