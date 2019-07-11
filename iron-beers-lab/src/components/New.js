import React, { Component } from 'react'

// ajax
import ajaxhandler from './../ajaxhandler'

import Header from './header'

export default class New extends Component {

    constructor(props){
        super(props)
        this.state= {
            beer : {
                name: "", 
                tagline: "",
                description: "", 
                first_brewed: "", 
                brewer_tips: "",
                attenuation_level: "",
                contributed_by: "",

            }, 
            api: new ajaxhandler("https://ih-beer-api.herokuapp.com/beers", "/new")
        }
    }

    handleSubmit = (event)  =>{
        event.preventDefault();
        this.state.api.createOne(this.state.beer, dbres => console.log( 'dbres ---', dbres))   
    }

    onChange =(e) =>{
        console.log("[e.target.name]----", [e.target.name])
        console.log("[e.target.value]----", [e.target.value])
        const beer = {...this.state.beer};
        beer[e.target.name] = e.target.value;
        this.setState(  {beer}   , ()=> console.log(this.state))
    }

      
    render() {
        return (
            <div>
                <Header />
                <h1 > Create your new beer !</h1>
                <form onSubmit={this.handleSubmit} className="new-beer-form">
                    <label>Name : </label>
                    <input name="name" type="text" value={this.state.name}  onChange={this.onChange}></input>
 
                    <label>Tagline : </label>
                    <input name="tagline" type="text" value={this.state.tagline} onChange={this.onChange}></input>
 
                    <label>Description: </label>
                    <textarea name="description" type="text" value={this.state.description} onChange={this.onChange}></textarea>

                    <label>First brewed: </label>
                    <input name="first_brewed" type="text" value={this.state.first_brewed}  onChange={this.onChange}></input>

                    <label>Brewer tips: </label>
                    <input name="brewer_tips" type="text" value={this.state.brewer_tips}  onChange={this.onChange}></input>
 
                    <label>Attenuation level: </label>
                    <input name="attenuation_level" type="number" value={this.state.attenuation_level} onChange={this.onChange}></input>

                    <label>Contributed by: </label>
                    <input name="contributed_by" type="text" value={this.state.contributed_by} onChange={this.onChange}></input>
                
                    <button type="submit"> Add your new beer </button>
                
                </form>
            </div>
        )
    }
}
