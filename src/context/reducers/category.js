import {CATEGORY_LOADING ,CATEGORY_SUCCESS} from '../../constants/actionTypes'
const category = (state,{payload,type})=>{
    
    switch(type){
        case CATEGORY_LOADING:
            return{
                ...state,
                category:{
                    ...state.auth,
                    error: false,
                    loading:true
                }
        };
        case CATEGORY_SUCCESS:
                return{
                    ...state,
                    category:{
                        ...state.category,
                        loading: false,
                        data:payload
                    },
        };
        default :
        return state;
    }

};

export default category;