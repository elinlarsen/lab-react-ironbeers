// librairies
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

// style
import './App.css';

// components
import Home from "./components/Home"
import Beers from "./components/Beers"
import Random from "./components/Random"
import New from "./components/New"
import SingleBeer from "./components/SingleBeer"

export default class App extends Component {

  render(){
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact  path='/beers' component={Beers}/>
            <Route exact  path='/random-beer' component={Random}/>
            <Route exact  path='/new-beer' component={New}/>
            <Route exact  path='/beers/:id' component={SingleBeer}/>
        </Switch>
      </div>
    );
  }
}
