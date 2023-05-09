// import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode} navbar-${props.mode}`} data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>

                            </li>
                            <li className="nav-item">

                                <Link to="/about" className="nav-link">about</Link>

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href='/'>Disabled</a>
                            </li>
                        </ul>

                            <div className="d-flex " >
                                <div className='p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 mx-3 my-2' style={{ height: "10px", width: "10px",cursor:"pointer",backgroundColor:"blue" }} onClick={() => { props.clickfunc("primary") }}></div>
                                <div className='p-3 text-success-emphasis bg-success-subtle border border-primary-subtle rounded-3 mx-3 my-2' style={{ height: "10px", width: "10px",cursor:"pointer",backgroundColor:"green" }} onClick={() => { props.clickfunc("success") }}></div>
                                <div className='p-3 text-primary-emphasis bg-info-subtle border border-primary-subtle rounded-3 mx-3 my-2' style={{ height: "10px", width: "10px",cursor:"pointer",backgroundColor:"skyBlue" }} onClick={() => { props.clickfunc("info") }}></div>
                                <div className='p-3 text-primary-emphasis bg-warning-subtle border border-primary-subtle rounded-3 mx-3 my-2' style={{ height: "10px", width: "10px",cursor:"pointer",backgroundColor:"yellow" }} onClick={() => { props.clickfunc("warning") }}></div>
                                <div className='p-3 text-primary-emphasis bg-danger-subtle border border-primary-subtle rounded-3 mx-3 my-2' style={{ height: "10px", width: "10px",cursor:"pointer",backgroundColor:"red" }} onClick={() => { props.clickfunc("danger") }}></div>
                            </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            {/* <button className="btn btn-primary" onClick={props.clickfunc} >theme</button> */}
                            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                                <input className="form-check-input mx-1 my-1" type="checkbox" onClick={() => { props.clickfunc(null) }} role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label mx-1 my-1" htmlFor="flexSwitchCheckDefault">Theme</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
//  fix props data type 
Navbar.propTypes =
{
    title: PropTypes.string.isRequired,
    Home: PropTypes.string
}
Navbar.defaultProps =
{
    title: "title to yhi hai",
    Home: "yhi to home hai"
}
