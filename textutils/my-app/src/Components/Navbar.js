import React from 'react'
import { Link } from 'react-router-dom'

export default function(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> 
      </ul>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" className="btn btn-primary" onClick={()=>{props.toggleMode("primary")}}></button>
      <button type="button" className="btn btn-secondary" onClick={()=>{props.toggleMode("secondary")}}></button>
      <button type="button" className="btn btn-success" onClick={()=>{props.toggleMode("success")}}></button>
      <button type="button" className="btn btn-info" onClick={()=>{props.toggleMode("info")}}></button>
      <button type="button" className="btn btn-warning" onClick={()=>{props.toggleMode("warning")}}></button>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode("tg")}} role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Dark':'Light'} Enable </label>
      </div>
    </div>
  </div>
</nav>
  )
}
