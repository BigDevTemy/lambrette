import React from "react";
import { useLocation } from "react-router";
import Header from '../../component/Header'
import ProductDetails from '../../layout/ProductDetails'
import ProductSpecification from '../../layout/ProductDetails/ProductSpecification'
import Footer from '../../component/Footer'
const Index = ()=>{
    const location = useLocation();
    const fromDashboard = location.state?.fromDashboard
    
    return (
        <div>
            <Header/>
            <ProductDetails />
            <ProductSpecification details={fromDashboard}/>
            <Footer/>
        </div>
    )
}

export default Index;