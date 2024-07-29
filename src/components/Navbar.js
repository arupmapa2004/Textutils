import React from 'react';
import PropTypes from 'prop-types';
 import {Link} from 'react-router-dom';
export default function Navbar(props) {
  
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode ==='Light'?'dark':'light'} bg-${props.mode  ==='Light'?'dark':'light'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link" to="/timer">Stopwatch</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <form className='d-flex ps-2 mx-2 my-1  '>
                    <button type="button" className={`btn btn-${props.mode === "Dark"? 'dark' : 'light'}`} onClick={props.toggleFun}>{props.mode}</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
Navbar.proptype = { title: PropTypes.string }