import React, { Component } from 'react'

import ajaxhandler from './../ajaxhandler'

import Header from './header'
import DetailedBeerComponent from "./DetailedBeerComponent";

export default class SingleBeer extends Component {
    constructor(props){
        super(props)
        this.state= {
            beer : [],
            api: new ajaxhandler("https://ih-beer-api.herokuapp.com/", "beers")
        }
      }

    componentDidMount() {

        const beerId=this.props.match.params.id
        this.state.api.getOne(beerId, dbRes => 
            {
                this.setState({beer: dbRes}, () =>{console.log(this.state.beers)})
        })
    }  

    render() {
        return (
            <div>
                <Header />
                <h1>Your Beer !</h1>
                <DetailedBeerComponent beer={this.state.beer}/>
            </div>
        )
    }
}

