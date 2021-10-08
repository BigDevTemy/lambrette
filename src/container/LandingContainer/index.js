
import Header from "../../component/Header";
import React,{useContext, useEffect} from "react";
import LandingLayoutUI from '../../layout/LandingLayoutUI'
import Sponsor from '../../layout/LandingLayoutUI/Sponsor'
import Ourproducts from '../../layout/LandingLayoutUI/Ourproduct'
import Footer from '../../component/Footer'
import { GlobalContext } from "../../context/Provider";
import getCategory from "../../context/actions/category/getCategory";


const Exhibition = ()=>{
    const {categoryDispatch,categoryState} = useContext(GlobalContext)
    console.log(categoryState);
    const {category:{loading}} = categoryState;
    const {category:{data}} = categoryState;
    useEffect(()=>{
        getCategory()(categoryDispatch)
        
    },[])
    return(
        
        <div className="landingpageMain">
            <div className="navDiv">
                <Header/>
            </div>
            <div>
                <LandingLayoutUI/>
            </div>
            
            <div>
                <Ourproducts loading={loading} data={data}/>
            </div>
            <div>
                <Sponsor/>
            </div>
            <div className="footerDiv">
                <Footer/>
            </div>
           
            
        </div>
    )
}

export default Exhibition;