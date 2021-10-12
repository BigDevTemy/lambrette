import axios from "../../../helper/axios";
import { SUB_CATEGORY_ERROR, SUB_CATEGORY_LOADING, SUB_CATEGORY_SUCCESS } from "../../../constants/actionTypes"

export default(cart_id)=>(dispatch)=>{

    dispatch({
        type:SUB_CATEGORY_LOADING,
    })
    
    axios.post('getSubcategoryList',JSON.stringify({
        id: cart_id,
        }))
    .then((res)=>{
        console.log('res',res.data)
        dispatch({
            type:SUB_CATEGORY_SUCCESS,
            payload:res.data

        })
    })
    .catch((err)=>{
        console.log('err',err);
        dispatch({
            type:SUB_CATEGORY_ERROR,
            payload:err.reponse ? err.response.data : 'CONNECTION ERROR'

        })
    })


}