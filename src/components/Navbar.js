import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    // to include something in string use backticks
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
            </ul>
            {/* to create color palettes */}
            {/* <div className='d-flex'>
                <div className="bg-primary rounded mx-2 my-2" onClick={()=>{props.toggleMode('primary')}} style={{height:"30px",width:"30px"}}></div>
                <div className="bg-warning rounded mx-2 my-2" onClick={()=>{props.toggleMode('warning')}} style={{height:"30px",width:"30px"}}></div>
                <div className="bg-danger rounded mx-2 my-2" onClick={()=>{props.toggleMode('danger')}} style={{height:"30px",width:"30px"}}></div>
                <div className="bg-success rounded mx-2 my-2" onClick={()=>{props.toggleMode('success')}} style={{height:"30px",width:"30px"}}></div>
            </div> */}
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                <input className="form-check-input dark" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>

            {/* primary=blue, success=green, danger=red, warning=yellow, info=light blue, light=light grey, dark=dark grey */}

            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}