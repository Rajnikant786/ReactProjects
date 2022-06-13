import React from 'react';
import {Link,NavLink} from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h2>Redux Login</h2>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
    </header>
  )
}

export default Header