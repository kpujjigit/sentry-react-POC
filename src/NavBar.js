import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <ul style={{color: 'yellow'}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
      </ul>


    );

}

export default NavBar;