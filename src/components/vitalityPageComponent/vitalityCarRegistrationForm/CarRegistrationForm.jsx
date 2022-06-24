import React , {useState} from 'react'
import FindCar from './FindCar';
import CarDetails from './CarDetails';
import DriverDetails from './DriverDetails';

const CarRegistrationForm = () => {
    const[formSteps, setFormSteps] = useState(0);
    // const[currentTitle, setCurrentTitle] = useState("");
    const currentTitle = ["Car Details","Confirm car details","Driver details"]
    // const[nextTitle, setNextTitle] = useState("");
    const nextTitle = ["Confirm car details","Driver details","About you"]
    // const[disableNextBtn, setDisableNextBtn] = useState(false)
    const findCar = (e) =>{
        console.log(e.target.attributes.id.value)
        setFormSteps(1)
        // if(formSteps === 1){
        //     setDisableNextBtn(false)
        // }
    }

    const nextBtn = (e) => {
        setFormSteps((currentPage) => currentPage+1)
        // console.log(formSteps)
        // if(formSteps == currentTitle.length - 1){
        //     setDisableNextBtn(true)
        // }
    }

    const backBtn = () => {
        setFormSteps((currentPage) => currentPage-1)
    }

    return (

        
        <>

            {/* ======== progress ======= */}
                <div className="vds-progress-bar">
                    <div className="vds-progress-bar__inner">
                        <div className="vds-progress-bar__indicator" style={{"width":"20%"}} />
                    </div>
                </div>

                <div className="vds-progress-path">
                    <div className="vds-progress-path__inner">
                        <div className="vds-progress-path__title-container">
                            <h1 id="quote_header_current_step_text" className="vds-progress-path__primary-title">{currentTitle[formSteps]}</h1>
                        </div>
                        <div className="vds-progress-path__progress">
                            <span className="vds-progress-path__progress-text">{formSteps} of 5</span>
                        </div>
                        <div className="vds-progress-path__position">
                            <div className="vds-progress-path__back">
                                <a href="#" className="vds-progress-path__back-link"  style={{"visibility":"hidden"}}>Back</a>
                            </div>
                        </div>
                        <div className="vds-progress-path__next">
                            <span id="quote_header_next_step_text" className="vds-progress-path__next-step">Next: {nextTitle[formSteps]}</span>
                        </div>
                    </div>
                </div>
               

            {/* ======= find car registration form ====== */}
            
            <div className="vds-form-journey__form">
                <div className="vds-form-journey__box vds-form-journey__box--negative">
                    {formSteps === 0 && (
                        <FindCar/> 
                    )}

                    {formSteps === 1 && (
                        <CarDetails/> 
                    )}

                    {formSteps === 2 && (
                        <DriverDetails/> 
                    )}

                    
                </div>


                {formSteps === 0 && (
                        <>
                        <div className="vds-form-journey__actions">
                            <div className="previous"> </div>
                            <div className="vds-form-journey__action-next">
                                <button className="vds-form-journey__button vds-button" id="button_next" aria-label="Find my car" title="Find my car" onClick={findCar}>Find my car</button>
                            </div>
                        </div>
                        </>
                    )}


                {formSteps === 1 && (
                        <>
                            <div className="vds-form-journey__actions">
                                <div className="vds-form-journey__action-previous">
                                    <button className="vds-form-journey__button vds-button vds-button--line vds-button--grey" id="button_back" aria-label="Back" title="Back" onClick={backBtn}>Back</button>
                                </div>
                                <div className="vds-form-journey__action-next">
                                    <button className="vds-form-journey__button vds-button" id="button_next" aria-label="Next" title="Next"  disabled={formSteps == currentTitle.length - 1} onClick={nextBtn}>Next</button>
                                    {/*disabled={formSteps == currentTitle.length - 1} , disabled={disableNextBtn} */}
                                </div>
                            </div>
                        </>
                    )}

                    {formSteps === 2 && (
                        <>
                            <div className="vds-form-journey__actions">
                                <div className="vds-form-journey__action-previous">
                                    <button className="vds-form-journey__button vds-button vds-button--line vds-button--grey" id="button_back" aria-label="Back" title="Back" onClick={backBtn}>Back</button>
                                </div>
                                <div className="vds-form-journey__action-next">
                                    <button className="vds-form-journey__button vds-button" id="button_next" aria-label="Next" title="Next" disabled={formSteps == currentTitle.length - 1} onClick={nextBtn}>Next</button>
                                </div>
                            </div>
                        </>
                    )}
                
            </div>        
            {/* <CarDetails/> */}
            {/* <DriverDetails/> */}
        </>
    )
}

export default CarRegistrationForm

