import React, { Component } from 'react'

// ajax
import ajaxhandler from './../ajaxhandler'

import Header from './header'
import BeerComponent from "./BeerComponent"
import SearchBeer from './searchBeer'

export default class Beers extends Component {

    constructor(props){
        super(props)
        this.state= {
            beers : [],
            api: new ajaxhandler("https://ih-beer-api.herokuapp.com/", "beers"),
            search: ""
        }
      }

    componentDidMount() {
        this.state.api.getAll(dbRes => 
            {this.setState({beers: dbRes})
        })               
    } 

    handleSearch = (searchedText) =>{
        this.setState({search: searchedText.toLowerCase()})
    }
 
        /*
        let filtered=[...this.state.beers]
        filtered=[...this.state.beers].filter(item => 
            item.name.toLowerCase().includes(beerName.toLowerCase())) 
         return filtered*/
        
    

    render() {
        let filteredBeers;
        this.state.search!=="" ?
        filteredBeers =this.state.beers.filter(
            item => {
                return (item.name.toLowerCase().includes(this.state.search))
            })
        : filteredBeers=this.state.beers
        
        return ( 
            <div >
                <Header />
                <h1>All beers</h1>
                <SearchBeer handleChange={this.handleSearch}/>
                <div className="beers-wrapper">
                    {filteredBeers.map( (item, index) => 
                        (<BeerComponent key={index} item={item} />)
                    )}
                </div>
            </div>)
    }
}
