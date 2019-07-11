import React, { Component } from 'react'

export default class SearchFood extends Component {

    constructor(props){
        super(props)
    }

    /*handleChange =(e) =>{
        this.props.handleSearch(e)
    }*/

    render() {
        return (
            <React.Fragment>
                <input type="text" onChange={(e) =>this.props.handleChange(e.target.value)} className="search-input" placeholder="Search..." />
            </React.Fragment>
        )
    }
}