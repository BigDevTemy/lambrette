// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route,useHistory} from 'react-router-dom'
import { List, Placeholder,Image, Container ,Message, Segment} from 'semantic-ui-react';
import routes from './route'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/Provider';
import 'semantic-ui-css/semantic.min.css'
function App() {
  const RenderRoute=(route)=>{
    // const history = useHistory();
    document.title = route.title || 'Boulos-NG'
    return(<Route 
     
      path={route.path} 
      exact 
      render={(props)=><route.component {...props} />}/>)
  }
  return (
  
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            {/* {routes.map((route,index)=>(
            <Route
            key={index}
            path={route.path}
            exact
            render={(props)=><route.component {...props}/>}
            >

            </Route>))
            
            } */}
            {routes.map((myroutes,index)=>{
                
                return (<RenderRoute  {...myroutes} key={index}/>)

                })}
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
