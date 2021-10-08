import React from "react";
import PrefabricatedUI from '../../layout/PrefabricatedUI'
import Header from '../../component/Header'
import Description from '../../layout/PrefabricatedUI/Description'
import Featured from '../../layout/PrefabricatedUI/Feature'
import ProductSpecification from '../../layout/PrefabricatedUI/ProductSpecification'
import Footer from '../../component/Footer'
const index = ()=>{
    return(
        <div>
            <Header/>
            <PrefabricatedUI/>
            <Description/>
            <ProductSpecification/>
            <Footer/>
            
        </div>
    )
}

export default index;