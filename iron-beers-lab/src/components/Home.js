import React, { Component } from 'react'
import HomeBeerComponent from "./homeBeerComponent"

export default class Home extends Component {

    setDescription =()=>{
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
    }

    render() {
        return (
            <React.Fragment>
                <HomeBeerComponent 
                    className="all-beers"
                    name="All Beers"
                    description={this.setDescription()}
                    imgName="beers.png"
                    link="/beers"/>

                <HomeBeerComponent 
                    className="random-beer"
                    name="Random beer"
                    description={this.setDescription()}
                    imgName="random-beer.png"
                    link="/random-beer"/>
                
                <HomeBeerComponent
                    className="new-beer"
                    name="New beer"
                    description={this.setDescription()}
                    imgName="new-beer.png"
                    link="/new-beer"/>
                

        </React.Fragment>
        )
    }
}
