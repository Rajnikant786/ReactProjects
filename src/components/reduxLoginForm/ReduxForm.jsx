import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

import './reduxForm.css';

const ReduxForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState('');

  const dispatch = useDispatch();

//   useEffect(() => {
//     setSubmitError('')
//   },[])

  const handleInputChange = (e) => {
    // debugger;
    switch(e.target.name){
        case 'username':
            if(e.target.value){
                setUsername({value:e.target.value, error: ''})
            }
            else{
                setUsername({value: '', error:'Please enter username'})
            }
            break;
        case 'password':
            if(e.target.value){
                setPassword({value:e.target.value, error: ''})
            }
            else{
                setPassword({value: '', error:'Please enter Password'})
            }
            break;
        default:
            console.log('nothing')    
    }
  }
 
//   ====== form submit ======
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit form ...")
    if(username.value && !username.error && password.value && !password.error){
        setSubmitError('')
        console.log("form submit success...")
        dispatch(
            login({
                username: username,
                password: password,
                loggedIn: true
            })
        );
    }else{
        setSubmitError('Please enter valid data...')
    }
  }
  
  return (
    <div className="redux_form">
        <form>
            <h1>Login Here</h1>

            {submitError && <p className='alert alert-danger'>{submitError}</p>}

            <div className="input_field">
                <input type="text" placeholder='Username' name="username" onChange={handleInputChange}/>                
                {username.error && <p className='errorText'>{username.error}</p>}
            </div>
            <div className="input_field">
                <input type="password" placeholder='Password' name="password" onChange={handleInputChange}/>
                {password.error && <p className='errorText'>{password.error}</p>}
            </div>
            <div className="submit_btn">
                <button type='submit' className='btn btn-sm' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ReduxForm