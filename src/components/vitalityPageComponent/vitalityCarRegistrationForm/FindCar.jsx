import React,{useState} from 'react'

const FindCar = () => {

    const [carRegistration, setCarRegistration] = useState({
        vehicleregistrationtext: "",
    });
    const handleInputChange = (e) => {
        const vehicleRegistration_number = e.target.value;
        console.log("vehicleRegistration_number :-" ,vehicleRegistration_number)
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,':-',value)

        switch(e.target.name){
            case 'vehicleregistrationtext':
                if(e.target.value){
                    // setTitle({value:e.target.value, error: ''})
                    console.log(e.target.value)
                }
                else{
                    // setTitle({value: '', error:'Choose a title from the list'})
                    // setDriverRegistration({ ...driverRegistration, error:'Choose a title from the list'})
                    alert("Enter registration number...")
                }
                break;
            default:
                console.log('nothing')
        }
        setCarRegistration({ ...carRegistration, [name] : value}) //... - spread operator, get data in driverdata object

        const carRegistrationData = { ...carRegistration } 
        console.log("carRegistrationData :- ", carRegistrationData)
    }
    return (
        <div>
            <div>
                {/* <div className="vds-form-journey__form">
                    <div className="vds-form-journey__box vds-form-journey__box--negative"> */}
                        <div className="vds-form-journey__set">
                            <div className="vds-form-journey__intro">
                                <h2 id="sub_header_primary_text" className="vds-form-journey__primary-title">Hello, tell us about your car</h2>
                                <p id="sub_header_secondary_text" className="vds-form-journey__lead-text">Log in if you’re a Vitality member, or enter your car reg below.</p>
                            </div>
                            <div className="vds-form-journey__main">
                                <div className="vds-cross-sell-bar vds-cross-sell-bar--apply">
                                    <div className="vds-cross-sell-bar__inner vds-padding-top-none">
                                        <div className="vds-cross-sell-bar__image-container">
                                            <img alt="Amazon.co.uk Gift Card" width={120} height={120} id="cross-sell-bar" className="vds-cross-sell-bar__image" src="https://members.vitality.co.uk/car-insurance/online-quote/-/jssmedia/quote-buy/data/media/img/amazon-card.ashx?h=120&w=120&hash=CBED5238E9EAAD527DE2D448D89DB1FE" />
                                        </div>
                                        <div>
                                            <div className="vds-cross-sell-bar__body">
                                                <div className="vds-cross-sell-bar__content">
                                                    <div className="vds-cross-sell-bar__title-container">
                                                        <h2 className="vds-cross-sell-bar__title">Get an Amazon.co.uk Gift Card worth at least £50 - and up to £75</h2>
                                                    </div>
                                                    <div className="vds-cross-sell-bar__message">
                                                        <div className="vds-cross-sell-bar__message-main">
                                                            <p>Exclusive offer just for Vitality members. We'll also guarantee to beat your renewal quote. <a rel="noopener noreferrer" href="https://www.vitality.co.uk/campaigns/car-member-offer-terms-and-conditions" target="_blank">T&amp;Cs apply</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="vds-form__group vds-form__group--form-journey">
                                    <p>Already a Vitality member? <a href="#" id="authenticate_text_anchor">Log in to claim your exclusive offer</a></p>
                                </div>
                                <div className="vds-lookup">
                                    <div className="vds-form__group vds-form__group--form-journey">
                                        <label className="vds-form__label" htmlFor="vehicle_registration_input">Car registration
                                            <span id="vehicle_registration_labelToolTip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                                <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" /><span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}>
                                                    <span className="vds-tooltip__text-inner">You can find this on your car’s registration plates.</span>
                                                </span></span>
                                        </label>
                                        <div className>
                                            <input autoComplete="off" className="vds-form__input vds-form__input--uppercase " id="vehicle_registration_input" type="vehicleregistrationtext" name="vehicleregistrationtext" maxLength={12} placeholder="e.g. 57AN L3Y" data-hj-suppress="true" onChange={handleInputChange} />
                                            {/* defaultValue */}
                                        </div>
                                    </div>
                                    <div className="vds-form__group vds-form__group--form-journey">
                                        <p className="vds-form__supporting-text" id="enter_manually_text_label">
                                            <a href="#" id="enter_manually_text_anchor" style={{ "cursor": "pointer" }}>I don’t know my registration</a>
                                        </p>
                                    </div>
                                    <div className="vds-limited-width vds-text-centre-aligned vds-margin-top--medium vds-colour-mid-grey vds-font-size-small">
                                        <p id="privacy_policy_description">We'll only use any personal information you give us now to generate a price automatically. We'll also send your quote in an email. Read our full
                                            <a rel="noopener noreferrer" href="https://www.vitality.co.uk/privacy" className="external-link" target="_blank">Privacy Notice</a>.<br /> <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}

                    {/* <div className="vds-form-journey__actions">
                        <div className="previous"> </div>
                        <div className="vds-form-journey__action-next">
                            <button className="vds-form-journey__button vds-button" id="button_next" aria-label="Find my car" title="Find my car">Find my car</button>
                        </div>
                    </div> */}

                {/* </div> */}
            </div>
        </div>
    )
}

export default FindCar
