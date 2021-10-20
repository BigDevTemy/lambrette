import axios from "../../../helper/axios";
import { CLEAR_CART, SAVE_ERROR, SAVE_LOADER } from "../../../constants/actionTypes"

export default (data)=>(dispatch)=>{
     dispatch({
         type:SAVE_LOADER
     })


    axios.post('sendmail',JSON.stringify({
        data:data[0],
        contact:data[1]
    }))
    .then(res=>{
        console.log('RES',res.data)
        // if(res.data.data == "Mail Sent"){
        //     dispatch({
        //         type:CLEAR_CART
        //     })
        // }
        // else{
        //     dispatch({
        //         type:SAVE_ERROR,
        //         payload:res.data
    
        //     })
        // }
        
    })
    .catch((err=>{
        
        dispatch({
            type:SAVE_ERROR,
            payload:err.reponse ? err.response.data : 'CONNECTION ERROR'

        })
    }))
}