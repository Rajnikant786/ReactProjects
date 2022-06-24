import React from 'react'
import './home.css'
import {NavLink} from 'react-router-dom'
// import vitalityLogo from '../../images/vitality-logo-white.svg'


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

        {/* ========= vitality quote page ========== */}
        <NavLink to='/vitalityCarInsurance' className="task_box vitalityBox">
          <span>2</span>
          <img src="https://members.vitality.co.uk/car-insurance/online-quote/-/jssmedia/quote-buy/data/media/img/vitality-logo-white.ashx?la=en&hash=CE473E807AA1852D1FE3228A4806AC81" alt=""/>
          {/* <h6>Vitality Car</h6> */}
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