import React, { useEffect } from "react";
import Header from '../../component/Header'
import MakeOrderUI from '../../layout/MakeOrderUI'
const MakeOrderContainer = ()=>{
    // useEffect(()=>{
         
    // },[])
    const data_all = {
        loading:false,
        data:{
            first_name:'Temiloluwa',
            last_name:'Odewumi',
            Child_name:'Geoffrey'
        }
    };
    return (
        <div>
            <div>
                 <Header/>
            </div>
           <div>
                <MakeOrderUI data={data_all}/>   
            </div> 
        </div>
    )
}

export default MakeOrderContainer;