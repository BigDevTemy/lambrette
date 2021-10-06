import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
// import Image1 from '../../../assets/images/sponsor/toyota.png'
import Image1 from '../../../assets/images/sponsor/Lambretta.jpg'
import Image2 from '../../../assets/images/sponsor/suzuki-logo.png'
import Image3 from '../../../assets/images/sponsor/avic.jfif'
import { CaretLeftFill,CaretRightFill } from 'react-bootstrap-icons';
import { Header } from 'semantic-ui-react';

const index = ()=>{
    return(
            
               <div className="sponsor"> 
                   
               <h3 style={{marginTop:20}}>Our Sponsor</h3>
                <div className="sponsor-container">
                    
                     
                    <div>
                        <Image src={Image1} className="sponsor-item"  style={{width:200}}/>
                    
                    </div>
                    

                    <div>
                        <Image className="sponsor-item " src={Image2} style={{width:120}}/>
                    
                    </div>
                    <div>
                        <Image className="sponsor-item " src={Image3} style={{width:120}}/>
                    
                    </div>
                    
                    
                </div>
            </div>
                
            
            
    )
}

export default index;