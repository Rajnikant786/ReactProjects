import React  from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/userSlice';

import './welcome.css'

const Welcome = () => {

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