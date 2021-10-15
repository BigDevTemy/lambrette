import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
// import Image1 from '../../../assets/images/sponsor/toyota.png'
import lamberet from '../../../assets/images/sponsor/lamberet.png'
import jincheng from '../../../assets/images/sponsor/jincheng.png'
import xfzyc from '../../../assets/images/sponsor/xfzyc.png'
import { CaretLeftFill,CaretRightFill } from 'react-bootstrap-icons';
import { Header } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';

const Index = ()=>{
    
    const location = useLocation();
    const locationlamberet=()=>{
        window.location=" http://www.lamberet.cn/ ";
    }
    const locationjincheng=()=>{
        window.location="http://www.jincheng-global.com/en/ ";
    }
    const locationxyfz=()=>{
        window.location=" https://www.xfzyc.com/";
    }
    
    return(
            
               <div className="sponsor"> 
                   
               <h3 style={{marginTop:20}}>OEM Partners</h3>
                <div className="sponsor-container">
                    
                     
                    <div onClick={()=>{locationlamberet()}}>
                        <Image src={lamberet} className="sponsor-item"    style={{width:200}}/>
                    
                    </div>
                    <div  onClick={()=>{locationjincheng()}} >
                        <Image src={jincheng} className="sponsor-item"  style={{width:200}}/>
                    
                    </div>
                    <div onClick={()=>{locationxyfz()}} >
                        <Image src={xfzyc} className="sponsor-item" style={{width:200}}/>
                    
                    </div>
                    

                    {/* <div>
                        <Image className="sponsor-item " src={Image2} style={{width:120}}/>
                    
                    </div>
                    <div>
                        <Image className="sponsor-item " src={Image3} style={{width:120}}/>
                    
                    </div> */}
                    
                    
                </div>
            </div>
                
            
            
    )
}

export default Index;