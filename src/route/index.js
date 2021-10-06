import React from 'react'
 import InsulatorPanelComponent from '../container/InsulatorPanelContainer'
 import CoolingUnitComponent from '../container/CoolingUnitContainer'
 import PrefabricatedComponent from '../container/PrefabricatedContainer'
 import LandingComponent from '../container/LandingContainer'
 import MakeOrder from '../container/MakeOrder'
const routes = [
    {
        path:"boulos/insulation/panel",
        component:InsulatorPanelComponent,
        title:'Insulator Panel'
    },
    {
        path:"boulos/cooling/units",
        component:CoolingUnitComponent,
        title:'Cooling Unit'
    },
    {
        path:"/boulos/prefabricated/cold/chain",
        component:PrefabricatedComponent,
        title:'Prefabricated Cold Chain Solution'
    },
    {
        path:"/boulos/exhibition",
        component:LandingComponent,
        title:'Lambrett Exhibition'
    },
    {
        path:"/boulos/makeorder",
        component:MakeOrder,
        title:'Make Order'
    }
]

export default routes;