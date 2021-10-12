import React,{Children,createContext,useReducer} from "react";
import categoryInitialState from "./initialStates/categoryInitialState";
import subcategoryList from "./initialStates/subcategoryList";
import modalListdata from "./initialStates/subcategoryList";
import productInitialState from "./initialStates/productInitialState";
import category from './reducers/category'
import subcategoryListReducer from "./reducers/subcategorylist";
// import product from '.reducers/products'

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [categoryState,categoryDispatch]= useReducer(category,categoryInitialState);
    const [subcategoryListState,subcategoryListDispatch] = useReducer(subcategoryListReducer,subcategoryList);
    
    // const [productState,productDispatch]= useReducer(product,productInitialState);

    return <GlobalContext.Provider value={
        {
            categoryState,
            categoryDispatch,
            subcategoryListState,
            subcategoryListDispatch,
            
           
        }
    }>
        {children}
    </GlobalContext.Provider>
}