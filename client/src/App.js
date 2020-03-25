import React  from 'react';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom'
import Ads from './components/ads-list';
import Details from './components/details-page';

import 'bootstrap/dist/css/bootstrap.min.css';


const  App = () => {
  return (
    <Router>
        <Switch>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/ads" component={Ads}/>
        </Switch>
    </Router>
  )  
}

export default App;