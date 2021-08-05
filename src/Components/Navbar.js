import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2">
            <Link to="/" className="navbar-brand mx-5" >React Redux Contact App</Link>
        </nav>
    )
}

export default Navbar
