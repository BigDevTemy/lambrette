import React from 'react'
 import InsulatorPanelComponent from '../container/InsulatorPanelContainer'
 import CoolingUnitComponent from '../container/CoolingUnitContainer'
 import PrefabricatedComponent from '../container/PrefabricatedContainer'
 import LandingComponent from '../container/LandingContainer'
 import MakeOrder from '../container/MakeOrder'
 import Cart from '../container/Cart'
const routes = [
    {
        path:"/boulos/insulation/panel",
        component:InsulatorPanelComponent,
        title:'Insulator Panel'
    },
    
    {
        path:"/boulos/prefabricated/cold/chain",
        component:PrefabricatedComponent,
        title:'Prefabricated Cold Chain Solution'
    },
    {
        path:"/boulos/cooling/units",
        component:CoolingUnitComponent,
        title:'Cooling Unit'
    },
    {
        path:"/boulos/exhibition",
        component:LandingComponent,
        title:'Lamberet Exhibition'
    },
    {
        path:"/boulos/makeorder",
        component:MakeOrder,
        title:'Make Order'
    },
    {
        path:"/boulos/view/cart",
        component:Cart,
        title:'Cart'
    }
]

export default routes;