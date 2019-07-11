import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="header">
            <i className="fas fa-home"></i>
            <h1> <Link to='/' className="home-title">Home</Link> </h1>
         </header>
    )
}
