import React from 'react'
import { useSelector } from 'react-redux';
import './footer.css'


const Footer = () => {

  const user = useSelector(state => state.userDetails);

  console.log('UserData:- ',user.userDetails);


  return (
    <footer>
      <p className="all_rights">
        Developed By Rajnikant <span>(2353858)</span> 
      </p>
      <p className="footerPassword">
        Your Password is :- <span>{user.userDetails?.password}</span>
      </p>
    </footer>
  )
}

export default Footer