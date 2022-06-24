import React from 'react'

const CarDetails = () => {
    return (
        <div>
            {/* <div className="vds-form-journey__form">
                <div className="vds-form-journey__box vds-form-journey__box--negative"> */}
                    <div className="vds-form-journey__set">
                        <div className="vds-form-journey__intro">
                            <h2 id="sub_header_primary_text" className="vds-form-journey__primary-title">Is this your car?</h2>
                            <p id="sub_header_secondary_text" className="vds-form-journey__lead-text">Here’s what the DVLA gave us.</p>
                        </div>
                        <div className="vds-form-journey__main">
                            <div className="vds-form__group vds-form__group--form-journey">
                                <p>Already a Vitality member? <a href="#" id="authenticate_text_anchor">Log in to claim your exclusive offer</a></p>
                            </div>
                            <div className="vds-vehicle-confirmation">
                                <div className="vds-vehicle-confirmation__inner">
                                    <div>
                                        <div id="make_text">Make</div>
                                        <span id="vehicle_make" className="vds-vehicle-confirmation__registration-number" data-hj-suppress="true">JAGUAR</span>
                                        <div id="registration_text">Registration</div>
                                        <span id="vehicle_registration" className="vds-vehicle-confirmation__registration-number" data-hj-suppress="true">HG17GTY</span>
                                        <div id="model_text">Model</div>
                                        <span id="vehicle_model" className="vds-vehicle-confirmation__details vds-vehicle-confirmation__details--primary" data-hj-suppress="true"><strong>XE R-SPORT</strong></span>
                                        <ul className="vds-vehicle-confirmation__list">
                                            <li id="vehicle_makeYear" className="vds-vehicle-confirmation__list-item" data-hj-suppress="true">2017</li>
                                            <li id="vehicle_fuelType" className="vds-vehicle-confirmation__list-item" data-hj-suppress="true">Diesel</li>
                                            <li id="vehicle_transmissionType" className="vds-vehicle-confirmation__list-item" data-hj-suppress="true">Automatic</li>
                                            <li id="vehicle_engineCapacity" className="vds-vehicle-confirmation__list-item" data-hj-suppress="true">1999</li>
                                        </ul>
                                    </div>
                                    <div className="vds-form__group vds-form__group--form-journey">
                                        <label className="vds-form__label" htmlFor="purchase_date_input">Purchase date
                                            <span id="purchase_date_labelToolTip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                                <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" />
                                                <span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}>
                                                    <span className="vds-tooltip__text-inner">This is found in the car’s logbook (V5C registration document), or your closest estimate is fine. If you’re buying the car within the next month, please put a future date</span>
                                                </span>
                                            </span>
                                        </label>
                                        <input className="vds-form__input vds-form__input--uppercase vds-form__input--invalid" placeholder="MM/YYYY" id="purchase_date_input" pattern="[0-9]*" autoComplete="off" data-hj-suppress="true"  />
                                        <div className="vds-form__validation-message vds-form__validation-message--invalid">
                                            <span id="purchase_date_error" className="vds-form__validation-text">Enter the date you purchased the car or your closest estimate is fine</span>
                                        </div>
                                        <div className="vds-checkbox">
                                            <input type="checkbox" className="vds-checkbox__input" id="purchase_date_checkbox" />
                                            <label className="vds-checkbox__label" htmlFor="purchase_date_checkbox">
                                                I’ve not purchased it yet
                                            </label>
                                        </div>
                                    </div>
                                    <div className="vds-form__group vds-form__group--form-journey">
                                        <label className="vds-form__label" htmlFor="vehicle_value_input">Current value (£)
                                        <span id="vehicle_value_tooltip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                                <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" />
                                                <span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}>
                                                    <span className="vds-tooltip__text-inner">The market value of your car (or your closest estimate based on its mileage, age and condition). This isn’t the amount we pay out if you make a total loss claim</span>
                                                </span>
                                            </span>
                                        </label>
                                        <div className>
                                            <input className="vds-form__input" placeholder="e.g. £ 5,000" pattern="[0-9]*" id="vehicle_value_input" maxLength={12} autoComplete="off" type="text"  />

                                            {/* defaultValue */}
                                        </div>
                                        <div className="vds-form__validation-message vds-form__validation-message--invalid">
                                            <span id="vehicle_value_inline_error" className="vds-form__validation-text" />
                                        </div>
                                    </div>
                                    <div className="vds-form__group vds-form__group--form-journey">
                                        <p className="vds-form__supporting-text" id="switch_to_manual_text">Not your car?
                                        <a id="enter_manually_anchor" style={{ "cursor": "pointer" }}> Search without a car registration</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="vds-form-journey__actions">
                    <div className="vds-form-journey__action-previous">
                        <button className="vds-form-journey__button vds-button vds-button--line vds-button--grey" id="button_back" aria-label="Back" title="Back">Back</button>
                    </div>
                    <div className="vds-form-journey__action-next">
                        <button className="vds-form-journey__button vds-button" id="button_next" aria-label="Next" title="Next">Next</button>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default CarDetails
