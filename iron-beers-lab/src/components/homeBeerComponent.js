import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeBeerComponent(props) {
    return (
        <div className={`${props.className} beer-block`}>
            <img src={`../../img/${props.imgName}`} alt={props.name}  />
            <strong> <Link to={props.link}> {props.name}  </Link></strong>
            <p>{props.description}</p> 
                    
        </div>
    )
}
