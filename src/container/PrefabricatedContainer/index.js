import React, { useContext, useEffect } from "react";
import PrefabricatedUI from '../../layout/PrefabricatedUI'
import Header from '../../component/Header'
import Description from '../../layout/PrefabricatedUI/Description'
import Featured from '../../layout/PrefabricatedUI/Feature'
import ProductSpecification from '../../layout/PrefabricatedUI/ProductSpecification'
import Footer from '../../component/Footer'
import { GlobalContext } from "../../context/Provider";
import getsubcategory from "../../context/actions/category/getsubcategory";
import { useLocation } from "react-router-dom";
import subcategoryList from "../../context/reducers/subcategorylist";
const Prefabricated = ()=>{
    const {subcategoryListDispatch,subcategoryListState} = useContext(GlobalContext)
    const {subcategoryList:{loading}} = subcategoryListState;
    const {subcategoryList:{data}} = subcategoryListState;
    const location = useLocation();
    
    useEffect(()=>{
        const cat_id=1;
        getsubcategory(cat_id)(subcategoryListDispatch)
        
    },[])

    return(
        <div>
            <Header/>
            <PrefabricatedUI/>
            <Description/>
            <ProductSpecification loading={loading} data={data}/>
            <Footer/>
            
        </div>
    )
}

export default Prefabricated;