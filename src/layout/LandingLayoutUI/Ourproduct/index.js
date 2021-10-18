import React from "react";
// import { Image } from "react-bootstrap";
import { Placeholder,Image,Grid,Segment,Card } from 'semantic-ui-react'
// import Prefabricated from '../../../assets/images/ourproducts/Prefabricated Cold Chain Solutions.png'
import Pointer from '../../../assets/images/pointer.png'
// import coolingunit from '../../../assets/images/ourproducts/coolingunit.png'
// import insulator from '../../../assets/images/ourproducts/insulator.png'
import { Link } from "react-router-dom";
const index = ({loading,data,error})=>{
    
    return(
        <div className="ourproducts">
            <h1 className="text-align-left">Our Products</h1>

            <div className="containerProducts">
                { loading && 
                      <Card.Group itemsPerRow={3} style={{width:'100%'}}>
                      <Card>
                        <Card.Content>
                          <Placeholder>
                            <Placeholder.Image square />
                            <Placeholder.Line length="long"/>
                            <Placeholder.Line length="small"/>
                          </Placeholder>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Placeholder>
                            <Placeholder.Image square />
                            <Placeholder.Line length="long"/>
                            <Placeholder.Line length="small"/>
                          </Placeholder>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Placeholder>
                            <Placeholder.Image square />
                            <Placeholder.Line length="long"/>
                            <Placeholder.Line length="small"/>
                          </Placeholder>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                        
                    }
                    
                    
                   <div className="containerProducts">
                      {data && data.length > 0 ? data.map((d)=>{
                          return <div className="catergoryDIV">
                                  <div className="categoryImageDiv">
                                  <Image src={`https://boulos.ng/lamberet/${d.imageurl}`} className="categoryImage"/>
                                  </div>
                                  <div className="productTitle">
                                      <div className="title">{d.category_name}</div>
                                      <div className="pointerDiv"><Link to="/boulos/prefabricated/cold/chain" state={{cat_id:'1'}}><Image src={Pointer} className="pointer_size"/></Link></div>
                                  </div>
                                </div> 
                        }) :null
                        
                        }
                    </div> 
                    <div className="containerProducts" style={{width:'100%'}}>
                      {error && error.length > 0 ? <div style={{margin:'auto'}}><h1>{error}</h1></div>:null}
                    </div>
                  
                   

                  </div>

          </div>
    )
}
export default index;