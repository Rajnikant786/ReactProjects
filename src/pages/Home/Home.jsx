import React from 'react'
import './home.css'
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom'


function Home() {
  return (
    <div className='home'>
      <div className='welcome_text'>
        <h1>Welcome to react task</h1>
      </div>

      <div className="task_container">
        <NavLink to='/reduxLogin' className="task_box">
          <span>1</span>
          <h6>Redux Login</h6>
        </NavLink>
      </div>
      {/* <Header/>
      <Body/>
      <Footer/> */}
    </div>
  )
}

// const navigate = useNavigate

export default Home