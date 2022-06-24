import React from 'react';
import './vitalityInsuranceQuote.css';
import Header from '../../components/vitalityPageComponent/header/Header'
import Progress from '../../components/vitalityPageComponent/registrationProgress/Progress';
import CarRegistrationForm from '../../components/vitalityPageComponent/vitalityCarRegistrationForm/CarRegistrationForm';
import Footer from '../../components/vitalityPageComponent/footer/Footer';

const VitalityInsuranceQuotePage = () => {

  return (
    <div className="vitalityPage_main vds-form-journey__inner">
        {/* <h1>VitalityInsuranceQuotePage</h1> */}
        <Header/>
        <CarRegistrationForm/>
        <Footer/>
      {/* <Header/>
      <ReduxLoginForm/>
      <Footer/> */}
    </div>    
  )
}

export default VitalityInsuranceQuotePage