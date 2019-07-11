import React from 'react'
import { Link } from 'react-router-dom';

export default function BeerComponent(props) {
    return (
        <div className="beer-wrap" id={props.item._id}>
            <img src={props.item.image_url} alt="beer img"/>
            <h2> <Link to={`/beers/${props.item._id}`}>{props.item.name} </Link> </h2>
            <strong>{props.item.tagline}</strong>
            <p> <strong>Contributed by </strong> {props.item.contributed_by}</p>            
        </div>
    )
}
