import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Map from './components/Map'
/*import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import ForgotPassword from "./components/ForgotPassword";*/
import Charts from "./components/Charts"


function App() {
  return (
    //<AuthProvider>
    <BrowserRouter>
        <Switch>
           <Route path="/" component={Dashboard} exact/>
           <Route path="/Charts" component={Charts}/>
           <Route path="/labTest" component={Dashboard}/>
           <Route path="/Map" component={Map}/>
       </Switch>
    </BrowserRouter>
    //</AuthProvider>
  );
}

export default App;

/*<Route exact path="/login" component={LogIn} />
<Route exact path="/signup" component={SignUp} />
<Route path="/ForgotPassword" component={ForgotPassword} />*/