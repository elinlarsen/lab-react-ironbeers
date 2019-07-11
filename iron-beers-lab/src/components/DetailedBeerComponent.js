import React from 'react'

export default function DetailedBeerComponent(props) {
    return (
        <div className="beer-wrap-detailed">
        <img src={props.beer.image_url} alt="beer img"/>
        <div className="beer-name-level">
            <h2>{props.beer.name}</h2>
            <p>{props.beer.attenuation_level}</p>
        </div>
        <p>{props.beer.tagline}</p>
        
        <strong>{props.beer.description}</strong>
        <p> <strong>Contributed by </strong> {props.beer.contributed_by}</p>            
     </div>

    )
}
