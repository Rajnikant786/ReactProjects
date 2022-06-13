import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { logout, selectUser } from '../../../features/userSlice';

import './welcome.css'

const Welcome = () => {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <div className='welcomeContainer'>
            <h1>Welcome <span className='user_name'>{'user.username'}</span></h1>
            {/* <Link to="/reduxLogin">Back</Link> */}
            <button className='btn btn-sm' onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Welcome