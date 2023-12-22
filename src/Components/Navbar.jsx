import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse Navbar-wrapper" id="navbarNav">
        <div className=' APP-LOGO'>
            <h1>APP LOGO</h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="./Dashboard">DASHBOARD</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Createads">CREATE ADS</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  )
}

export default Navbar