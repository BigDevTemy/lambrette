import React from "react";
import axios from "../../../helper/axios";
import { CATEGORY_ERROR, CATEGORY_LOADING,CATEGORY_SUCCESS } from "../../../constants/actionTypes";
// import axios from 'axios'

export default ()=>(dispatch)=>{
    dispatch({
        type:CATEGORY_LOADING
    })
    
    axios.get('getallcategory')
    .then((res)=>{
        console.log('res',res.data)
        dispatch({
            type:CATEGORY_SUCCESS,
            payload:res.data

        })
    })
    .catch((err)=>{
        console.log('err',err);
        dispatch({
            type:CATEGORY_ERROR,
            payload:err.reponse ? err.response.data : 'CONNECTION ERROR'

        })
    })
}