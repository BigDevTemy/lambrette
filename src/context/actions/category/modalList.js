import axios from "../../../helper/axios";
import { MODAL_LIST_LOADING,MODAL_LIST_SUCCESS,MODAL_LIST_ERROR} from "../../../constants/actionTypes"

export default(data)=>(dispatch)=>{
    
    
    dispatch({
        type:MODAL_LIST_LOADING
    })

    axios.post('getModalDetails',JSON.stringify({
        product_name:data.product_name,
        }))
    .then((res)=>{
        console.log('result',res.data)
        dispatch({
            type:MODAL_LIST_SUCCESS,
            payload:res.data

        })
    })
    .catch((err)=>{
        
        dispatch({
            type:MODAL_LIST_ERROR,
            payload:err.reponse ? err.response.data : 'CONNECTION ERROR'

        })
    })


}