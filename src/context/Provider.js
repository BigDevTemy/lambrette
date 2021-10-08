import React,{Children,createContext,useReducer} from "react";
import categoryInitialState from "./initialStates/categoryInitialState";
import productInitialState from "./initialStates/productInitialState";
import category from './reducers/category'
// import product from '.reducers/products'

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [categoryState,categoryDispatch]= useReducer(category,categoryInitialState);
    // const [productState,productDispatch]= useReducer(product,productInitialState);

    return <GlobalContext.Provider value={
        {
            categoryState,
            categoryDispatch,
            // productState,
            // productDispatch
        }
    }>
        {children}
    </GlobalContext.Provider>
}