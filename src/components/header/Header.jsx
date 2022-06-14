import React  from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './header.css'

const Header = () => {

  // const user = useSelector(selectUser);

  const user = useSelector(state => state.userDetails);

  console.log('UserData:- ',user.userDetails);


  return (
    <header>
        <div className='logo'>
            <h2>Redux Login</h2>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="welcome_text">
            welcome  <span>{user.userDetails?.username}</span>
          </li>

        </ul>
    </header>
  )
}

export default Header