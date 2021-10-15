import { CLEAR_CART } from "../../../constants/actionTypes"

export default ()=>(dispatch)=>{
    dispatch({
        type:CLEAR_CART
    })
}