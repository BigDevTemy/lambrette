import React, { useState } from "react";
import {Table,Accordion,Icon} from 'semantic-ui-react'
const Index =()=>{
    const [activeIndex,setactiveIndex] = useState();
    
    const handleClick = (e,titleprops)=>{
        const { index } = titleprops;
        console.log(activeIndex)
        const newIndex = activeIndex === index ? -1 :index;
        setactiveIndex(newIndex)

    }
    return(
        <div className="desciptionMain">
            <h1 className="desciptionMain_h1">Description Break Down</h1>
           
            <div>
                <Accordion fluid styled >
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-180
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                            Environmental Temp &nbsp; &nbsp; -5~10 <br/>Chamber Temp -22~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                            4-100
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                             1.7&#176;C &nbsp;  &nbsp;  2100 / -17.8&#176;C &nbsp;  &nbsp;  1180
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
                            MODEL &nbsp; &nbsp; SD-5S11 <br/><br/> STYLE &nbsp; &nbsp; WOBBLE-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp; 108<br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU 
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                             STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            0.9
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>
                             Evaporator (mm) &nbsp; &nbsp; 670x590x144<br/><br/> Condenser(mm) &nbsp; &nbsp; 907x380x252
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                            DC12V &nbsp; &nbsp; 20.8 
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 17<br/><br/> Condenser&nbsp; &nbsp; 28
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-960
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                            Environmental Temp &nbsp; &nbsp; -5~40 <br/><br/> Chamber Temp -20~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                            36-50
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                            1.7&#176;C &nbsp;  &nbsp;  8000 / -17.8&#176;C &nbsp;  &nbsp;  4500 
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
                            MODEL &nbsp; &nbsp; QP-31 <br/><br/> STYLE &nbsp; &nbsp; SWASH-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp; 313 <br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU 
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC24V  
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                           STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC24V
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            4.5
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>

                             Evaporator (mm) &nbsp; &nbsp; 1900X700X213<br/><br/> Condenser(mm) &nbsp; &nbsp; 1460X510X430
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                             48
                             DC24V &nbsp; &nbsp; 48
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 63<br/><br/> Condenser&nbsp; &nbsp; 70
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-760
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                       
                            Environmental Temp &nbsp; &nbsp; -5~40 <br/><br/> Chamber Temp -18~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                            14-18
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                        
                            1.7&#176;C &nbsp;  &nbsp;  4700 / -17.8&#176;C &nbsp;  &nbsp;  2450
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
                       
                            MODEL &nbsp; &nbsp; TK-21 <br/><br/> STYLE &nbsp; &nbsp; SWASH-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp; 215 <br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V  
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                
                           STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            3.6
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>
                        
                             Evaporator (mm) &nbsp; &nbsp; 1680X620X233<br/><br/> Condenser(mm) &nbsp; &nbsp; 1460X510X430
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                        
                             DC24V &nbsp; &nbsp; 30A
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 45<br/><br/> Condenser&nbsp; &nbsp; 70
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>
                    
                    
                    <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-600
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                     
                            Environmental Temp &nbsp; &nbsp; -5~40 <br/><br/> Chamber Temp -20~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                            12-18
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                       
                            1.7&#176;C &nbsp;  &nbsp;  4200 / -17.8&#176;C &nbsp;  &nbsp;  2100
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
                        
                            MODEL &nbsp; &nbsp; TK-21 <br/><br/> STYLE &nbsp; &nbsp; SWASH-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp; 215 <br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V  
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                       
                           STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            3.2
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>
                
                             Evaporator (mm) &nbsp; &nbsp; 1680X620X233<br/><br/> Condenser(mm) &nbsp; &nbsp; 1460X510X430
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                        
                             DC24V &nbsp; &nbsp; 30A
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 45<br/><br/> Condenser&nbsp; &nbsp; 70
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 4}
                        index={4}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-500
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                     
                            Environmental Temp &nbsp; &nbsp; -5~40 <br/><br/> Chamber Temp -18~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                            5-10
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                        
                            1.7&#176;C &nbsp;  &nbsp;  3120 / -17.8&#176;C &nbsp;  &nbsp;  1705
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
                        
                            MODEL &nbsp; &nbsp; OP/TK-16 <br/><br/> STYLE &nbsp; &nbsp; SWASH-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp; 163 <br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V  
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                       
                           STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            1.9
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>
                        
                             Evaporator (mm) &nbsp; &nbsp; 1261X630X260<br/><br/> Condenser(mm) &nbsp; &nbsp; 1020X520X355
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                        
                             DC24V &nbsp; &nbsp; 28A
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 32<br/><br/> Condenser&nbsp; &nbsp; 39
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 5}
                        index={5}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-450
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                            Environmental Temp &nbsp; &nbsp; -5~40 <br/><br/> Chamber Temp -18~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                            18-25
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                        
                            1.7&#176;C &nbsp;  &nbsp;  3350 / -17.8&#176;C &nbsp;  &nbsp;  1730 
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
          
                            MODEL &nbsp; &nbsp; SD-7L15/QP-16 <br/><br/> STYLE &nbsp; &nbsp; SWASH-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp;  155/163 <br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU 
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                      
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V  
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                           STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            1.4
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>
                        
                             Evaporator (mm) &nbsp; &nbsp; 1020X660X213<br/><br/> Condenser(mm) &nbsp; &nbsp; 1000X520X355
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                             
                             DC24V &nbsp; &nbsp; 25
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 26<br/><br/> Condenser&nbsp; &nbsp; 38
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 6}
                        index={6}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-350
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 6}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                     
                            Environmental Temp &nbsp; &nbsp; -5~40 <br/><br/> Chamber Temp -18~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                            5-10
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                        
                            1.7&#176;C &nbsp;  &nbsp;  3120 / -17.8&#176;C &nbsp;  &nbsp;  1705 
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
                            MODEL &nbsp; &nbsp; SD-5S14 <br/><br/> STYLE &nbsp; &nbsp; SWASH-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp;  138 <br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU 
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                      
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V  
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                            
                           STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            1.5
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>
                     
                             Evaporator (mm) &nbsp; &nbsp; 990X537X185<br/><br/> Condenser(mm) &nbsp; &nbsp; 860X490X225
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                             
                             DC24V &nbsp; &nbsp; 15.5
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 22<br/><br/> Condenser&nbsp; &nbsp; 30
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 7}
                        index={7}
                        onClick={handleClick}
                        
                    >
                    <Icon name='dropdown' />
                        XF-300
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 7}>
                    <div style={{padding:20}}>
                    <Icon name='check circle' />Application Temp(C)
                        <div style={{padding:20}}>
                     
                            Environmental Temp &nbsp; &nbsp; -5~40 <br/><br/> Chamber Temp -18~25
                        </div>
                        <Icon name='check circle' />Structure
                        <div style={{padding:20}}>
                            Split direct drive unit
                        </div>
                        <Icon name='check circle' /> Volume of Container (&#x33a5;)
                        <div style={{padding:20}}>
                          18-25
                        </div>

                        <Icon name='check circle' /> Cooling Capacity (W) 37.8&#176;C
                        <div style={{padding:20}}>
                        
                            1.7&#176;C &nbsp;  &nbsp;  3350 / -17.8&#176;C &nbsp;  &nbsp;  1730 
                        </div>
                        <Icon name='check circle' /> Compressor
                        <div style={{padding:20}}>
                        
                            MODEL &nbsp; &nbsp; SD-7L15/QP-16<br/><br/> STYLE &nbsp; &nbsp; SWASH-PLATE <br/><br/> DISPLACEMENT (CC) &nbsp; &nbsp;  155/163 <br/><br/> Refrigerant Oil &nbsp; &nbsp; SL-32S OR EQU 
                        </div>
                        
                        <Icon name='check circle' /> Condenser
                        <div style={{padding:20}}>
                      
                            STYLE &nbsp; &nbsp; FRONT <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V  
                        </div>

                        <Icon name='check circle' /> Evaporator
                        <div style={{padding:20}}>
                            
                           STYLE &nbsp; &nbsp; ROOF TOP <br/><br/> FAN &nbsp; &nbsp; AXIAL FLOW FAN <br/><br/> VOLTAGE &nbsp; &nbsp; DC12V/DC24V
                        </div>

                        <Icon name='check circle' /> Throttle mode
                        <div style={{padding:20}}>
                            External Equalizer Expansion
                        </div>

                        <Icon name='check circle' /> Freezing Medium
                        <div style={{padding:20}}>
                            R404A
                        </div>
                        <Icon name='check circle' /> Injection Volume(KG)
                        <div style={{padding:20}}>
                            1.3
                        </div>
                        <Icon name='check circle' /> Defrost
                        <div style={{padding:20}}>
                            Hot Gas Defrosting
                        </div>
                        <Icon name='check circle' /> Size
                        <div style={{padding:20}}>
                        
                             Evaporator (mm) &nbsp; &nbsp; 860X560X155<br/><br/> Condenser(mm) &nbsp; &nbsp; 1000X860X240
                        </div>

                        <Icon name='check circle' /> Rated Current
                        <div style={{padding:20}}>
                             
                             DC24V &nbsp; &nbsp; 15.5
                        </div>
                        <Icon name='check circle' /> Weight (Kg)
                        <div style={{padding:20}}>
                            Evaporator &nbsp; &nbsp; 10<br/><br/> Condenser&nbsp; &nbsp; 30
                        </div>
                        
                    </div>
                    
                    </Accordion.Content>
                </Accordion>
               
            </div>

        </div>
    )

}

export default Index;