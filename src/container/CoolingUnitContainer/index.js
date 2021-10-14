import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import Header from '../../component/Header'
import getsubcategory from "../../context/actions/category/getsubcategory";
import { GlobalContext } from "../../context/Provider";
import CoolingUnitUI from '../../layout/CoolingUnitUI'
import ProductSpecification from '../../layout/CoolingUnitUI/ProductSpecification'
import Footer from '../../component/Footer'
import Description from '../../layout/CoolingUnitUI/Description'
const Index = ()=>{
    const {subcategoryListDispatch,subcategoryListState} = useContext(GlobalContext)
    const {subcategoryList:{loading}} = subcategoryListState;
    const {subcategoryList:{data}} = subcategoryListState;
    const location = useLocation();
    
    useEffect(()=>{
        const cat_id=2;
        getsubcategory(cat_id)(subcategoryListDispatch)
        
    },[])
    return(
        <div>
            <Header/>
            <CoolingUnitUI/>
            <ProductSpecification loading={loading} data={data}/>
            <Description/>
            <Footer/>
        </div>
    )
}

export default Index;