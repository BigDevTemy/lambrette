// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route,useHistory} from 'react-router-dom'
import { List, Placeholder,Image, Container ,Message, Segment} from 'semantic-ui-react';
import routes from './route'
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
function App() {
  // console.log(routes)
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          {routes.map((route,index)=>(
          <Route
          key={index}
           path={route.path}
           exact
           render={(props)=><route.component {...props}/>}
           >

          </Route>))
          
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
