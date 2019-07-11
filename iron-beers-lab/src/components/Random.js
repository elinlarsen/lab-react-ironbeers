import React, { Component } from 'react'

import ajaxhandler from './../ajaxhandler'

import Header from './header'
import DetailedBeerComponent from "./DetailedBeerComponent";

export default class Random extends Component {
    constructor(props){
        super(props)
        this.state= {
            beer : [],
            api: new ajaxhandler("https://ih-beer-api.herokuapp.com/beers", "random")
        }
      }

      componentDidMount() {
        this.state.api.getAll(dbRes => 
            {this.setState({beer: dbRes}, () =>{console.log(this.state.beer)})
        })
    }  

    render() {
        return (
            <div>
                 <Header />
                 <h1> Random Beer !</h1>
                 <DetailedBeerComponent beer={this.state.beer}/>
            </div>
        )
    }
}

