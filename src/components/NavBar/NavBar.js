import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul className="menu">
               <Link to="/"> <li className="menu-item">Home</li></Link>
                <Link to="/products"><li className="menu-item">Products</li></Link>
                <Link to="/login"><li className="menu-item">Login</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar
