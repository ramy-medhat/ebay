import React, { Component } from 'react';
import { Route, Link,BrowserRouter as Router, Switch } from 'react-router-dom'
import Ads from './components/ads';
import Details from './components/details';

import './App.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class App extends Component {
state = {
    ads: []
    }
    componentDidMount() {
    const request = 'ad-list'
      fetch(request)
      .then(res => res.json())
      .then((data) => {
        var newData = this.state.ads.concat([data]);
        this.setState({ ads: newData })
      })
      .catch(console.log)
    }

    render() {
    return (
    <Router>
        <Switch>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/ads" component={Ads}/>
        </Switch>
    <Ads ads={this.state.ads} />
    </Router>
    )
    }
}

export default App;
