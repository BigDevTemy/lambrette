import {SUB_CATEGORY_ERROR, SUB_CATEGORY_LOADING ,SUB_CATEGORY_SUCCESS,MODAL_LIST_LOADING,MODAL_LIST_SUCCESS,MODAL_LIST_ERROR} from '../../constants/actionTypes'
const subcategoryList = (state,{payload,type})=>{
    
    switch(type){
        case SUB_CATEGORY_LOADING:
            return{
                ...state,
                subcategoryList:{
                    ...state.subcategoryList,
                    error: false,
                    loading:true
                }
        };
        
        case SUB_CATEGORY_SUCCESS:
                return{
                    ...state,
                    subcategoryList:{
                        ...state.subcategoryList,
                        loading: false,
                        data:payload
                    },
        };
        case SUB_CATEGORY_ERROR:
                return{
                    ...state,
                    subcategoryList:{
                        ...state.subcategoryList,
                        loading: false,
                        data:null,
                        error:payload
                    },
        };
        case MODAL_LIST_LOADING:
            return{
                ...state,
                modalListdata:{
                    ...state.modalListdata,
                    modal_error: false,
                    modal_loading:true
                }
        };
        case MODAL_LIST_ERROR:
            return{
                ...state,
                modalListdata:{
                    ...state.modalListdata,
                    modal_error: payload,
                    modal_loading:false
                }
        };
        case MODAL_LIST_SUCCESS:
            return{
                ...state,
                modalListdata:{
                    ...state.modalListdata,
                    modal_error: null,
                    modal_loading:false,
                    modal_data:payload
                }
        };
        default :
        return state;
    }

};

export default subcategoryList;