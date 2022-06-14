import React from 'react'
import Header from '../../components/header/Header'
import ReduxLoginForm from '../../components/reduxLoginForm/ReduxForm'
import Footer from '../../components/footer/Footer'
import './reduxLogin.css'
// import { useSelector } from 'react-redux'
// import { selectUser } from '../../features/userSlice'
// import Welcome from '../../components/reduxLoginPageComponents/welcome/Welcome'

const ReduxLogin = () => {

  // const user = useSelector(selectUser);

  return (
    <div className="main_container">
      <Header/>
      {/* {user ? <Welcome/> : <ReduxLoginForm/>} */}
      <ReduxLoginForm/>
      <Footer/>
    </div>    
  )
}

export default ReduxLogin