import React from 'react'
import { Link } from 'react-router-dom'


export default function Navb(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.modeColor==='light'?'light':'dark'} bg-${props.modeColor}`} style={props.styleForAll}>
  <a className="navbar-brand" href="/">Text Editer</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="./about">About</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Disabled</a>
      </li>
    </ul>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
{/* 
    <Darkmodebtn/> */}
  </div>
</nav>
  )
}
