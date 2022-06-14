import React from 'react'
import {NavLink} from 'react-router-dom'
import './pageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="pageNotFound_container">
        <h1>404</h1>
        <p>page not found</p> 
        <br/>
        <NavLink to="/" className="btn btn-sm">Go To Home</NavLink>
      </div>  
    </div>
  )
}

export default PageNotFound