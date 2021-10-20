import React from "react";
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import InsulationPanelUI from "../../layout/InsulationPanelUI";
import Features from '../../layout/InsulationPanelUI/Features'
import ProductSpecification from '../../layout/InsulationPanelUI/ProductSpecification'
const InsulatorPanel = ()=>{
    return(
        <div>
           <Header/>
           <InsulationPanelUI/>
           <Features/>
            <ProductSpecification/>
           <Footer/>
        </div>
    )
}

export default InsulatorPanel;