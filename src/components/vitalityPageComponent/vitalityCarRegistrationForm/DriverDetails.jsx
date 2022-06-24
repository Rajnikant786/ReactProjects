import React, {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { submitDriverDetails,clearDriverData } from '../../../features/carRegistrationSlice'
import './registrationForm.css'



const DriverDetails = () => {

    const dispatch = useDispatch();

    // const [title, setTitle] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [DOB, setDOB] = useState('');
    // const [maritalstatus, setMaritalstatus] = useState('');
    // const [homeowner, setHomeowner] = useState('');
    // const [occupation, setOccupation] = useState('');
    // const [dropdowndemployeestatus, setDropdowndemployeestatus] = useState('');
    // const [business_type, setBusiness_type] = useState('');
    // const [driverexperienceyear, setDriverexperienceyear] = useState('');
    // const [driverexperiencemonth, setDriverexperiencemonth] = useState('');
    // const [postCode, setPostCode] = useState('');
    const [driverRegistration, setDriverRegistration] = useState({
        title: "",
        firstName: "",
        lastName: "",
        DOB: "",
        maritalstatus: "",
        homeowner: "",
        occupation: "",
        dropdowndemployeestatus: "",
        business_type: "",
        driverexperienceyear: "",
        driverexperiencemonth: "",
        postCode: ""
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,':-',value)

        switch(e.target.name){
            case 'title':
                if(e.target.value){
                    // setTitle({value:e.target.value, error: ''})
                    // console.log(e.target.value)
                }
                else{
                    // setTitle({value: '', error:'Choose a title from the list'})
                    // setDriverRegistration({ ...driverRegistration, error:'Choose a title from the list'})
                    alert('Choose a title from the list')
                }
                break;
            default:
                // console.log('nothing')
        }
        setDriverRegistration({ ...driverRegistration, [name] : value}) //... - spread operator, get data in driverdata object
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const driverData = { ...driverRegistration } 
        console.log("driverData :- ", driverData)

        dispatch(
            submitDriverDetails({
                driverData
            })
        );

        

    }

    
    const driver = useSelector(state => state.driverDetails);
    // console.log('Get driverData from Redux :- ',driver.driverDetails);

    const handleClearDeriverData = (e) => {
        e.preventDefault();
        dispatch(clearDriverData())
        console.log('Clear driverData from Redux :- ',driver.driverDetails);
        
    }

    // const driver = useSelector(state => state.driverDetails);
    // console.log('Clear driverData from Redux :- ',driver.driverDetails);

    return (
        <div>

            {driver.driverDetails &&( 
            <>
            <div className ="getData_Container">
                <div className="card">
                    <div className="card-header">
                        Submited Data
                    </div>
                    <div className="card-body">
                        <h1>{driver.driverDetails.driverData?.title}
                            <span>{driver.driverDetails.driverData?.firstName}</span>
                            <span>{driver.driverDetails.driverData?.lastName}</span>
                        </h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Date of birth</th>
                                    <td>{driver.driverDetails.driverData?.DOB}</td>
                                </tr>
                                <tr>
                                    <th>Merital Status</th>
                                    <td>{driver.driverDetails.driverData?.maritalstatus}</td>
                                </tr>
                                <tr>
                                    <th>Home Owner</th>
                                    <td>{driver.driverDetails.driverData?.homeowner}</td>
                                </tr>
                                <tr>
                                    <th>Occupation</th>
                                    <td>{driver.driverDetails.driverData?.occupation}</td>
                                </tr>
                                <tr>
                                    <th>Employee status</th>
                                    <td>{driver.driverDetails.driverData?.dropdowndemployeestatus}</td>
                                </tr>
                                <tr>
                                    <th>Business Type</th>
                                    <td>{driver.driverDetails.driverData?.business_type}</td>
                                </tr>
                                <tr>
                                    <th>Experience in Year</th>
                                    <td>{driver.driverDetails.driverData?.driverexperienceyear}</td>
                                </tr>
                                <tr>
                                    <th>Experience in Months</th>
                                    <td>{driver.driverDetails.driverData?.driverexperiencemonth}</td>
                                </tr>
                                <tr>
                                    <th>Post code</th>
                                    <td>{driver.driverDetails.driverData?.postCode}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>    
                    <div className="card-footer">
                        <button className="btn" onClick={handleClearDeriverData}>Clear Data</button>    
                    </div>                
                </div>
            </div> 
            </>
            )}   

            {/* <div className="vds-progress-bar">
                <div className="vds-progress-bar__inner">
                    <div className="vds-progress-bar__indicator" style={{"width":"40%"}} />
                </div>
            </div>

            <div className="vds-progress-path">
                <div className="vds-progress-path__inner">
                    <div className="vds-progress-path__title-container">
                        <h1 id="quote_header_current_step_text" className="vds-progress-path__primary-title">Driver details</h1>
                    </div>
                    <div className="vds-progress-path__progress">
                        <span className="vds-progress-path__progress-text">2 of 5</span>
                    </div>
                    <div className="vds-progress-path__position">
                        <div className="vds-progress-path__back">
                            <a className="vds-progress-path__back-link">Back</a>
                        </div>
                    </div>
                    <div className="vds-progress-path__next">
                        <span id="quote_header_next_step_text" className="vds-progress-path__next-step">Next: About you</span>
                    </div>
                </div>
            </div> */}


            <div className="vds-form-journey__form">
                <div className="vds-form-journey__box vds-form-journey__box--negative">
                    <div className="vds-form-journey__set">
                        <div className="vds-form-journey__intro">
                            <h2 id="sub_header_primary_text" className="vds-form-journey__primary-title">Thanks. Now, tell us about your drivers</h2>
                            <p id="sub_header_secondary_text" className="vds-form-journey__lead-text" />
                            <p>
                                <span>We’ll base this quote on <strong>you</strong> being the main driver and planholder.
                                <br />
                                    However you also need to tell us who else will drive this car.
                                </span>
                            </p>
                            <p />
                        </div>
                        <div className="vds-form-journey__main">
                            <div className="vds-form__group vds-form__group--form-journey">
                                <p>Already a Vitality member? <a href="#" id="authenticate_text_anchor">Log in to claim your exclusive offer</a></p>
                            </div>
                            <div className="vds-form-journey__main">
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <h4 className="vds-form__heading">Who drives this car?</h4>
                                    <label className="vds-form__label" htmlFor="title_dropdown">Title</label>
                                    <select id="title_dropdown" className="vds-form__input vds-form__input--select vds-form__input--invalid " name="title" data-hj-suppress="true"  onChange={handleInputChange}>
                                        <option value="Please choose">Please choose</option>
                                        <option value="Dr">Dr</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Mx">Mx</option>
                                    </select>
                                    {/* {title.error && 
                                        <span id="error_message_for_title" className="vds-form__validation-text">{title.error}</span>
                                    } */}
                                    {/* <div className="vds-form__validation-message vds-form__validation-message--invalid">
                                        <span id="error_message_for_title" className="vds-form__validation-text">Choose a title from the list</span>
                                    </div> */}
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="first_name_input">First Name</label>
                                    <div className>
                                        <input autoComplete="off" className="vds-form__input" id="first_name_input" type="firstName" name="firstName" maxLength={35} placeholder="Please enter" spellCheck="false" data-hj-suppress="true" value={driverRegistration.firstName} onChange={handleInputChange}/>
                                        {/* defaultValue */}
                                        {/* {firstName.error && 
                                            <span  className="vds-form__validation-text">{firstName.error}</span>
                                        } */}
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="last_name_input">Last Name</label>
                                    <div className>
                                        <input autoComplete="off" className="vds-form__input" id="last_name_input" type="lastName" name="lastName" maxLength={35} placeholder="Please enter" spellCheck="false" data-hj-suppress="true" value={driverRegistration.lastName} onChange={handleInputChange}/>
                                        {/* {lastName.error && 
                                            <span  className="vds-form__validation-text">{lastName.error}</span>
                                        } */}
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <div className="vds-form__group vds-form__group--form-journey">
                                        <label className="vds-form__label" htmlFor="dateofbirth_input">Date of birth</label>
                                        <input className="vds-form__input vds-form__input--uppercase " pattern="[0-9]*" inputMode="numeric" placeholder="DD/MM/YYYY" name="DOB" id="dateofbirth_input" autoComplete="off" data-hj-suppress="true" value={driverRegistration.DOB} onChange={handleInputChange}/>
                                        {/* {DOB.error && 
                                            <span  className="vds-form__validation-text">{DOB.error}</span>
                                        } */}
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="maritalstatus_dropdown">Personal status</label>
                                    <select id="maritalstatus_dropdown" className="vds-form__input vds-form__input--select " name="maritalstatus" data-hj-suppress="true" value={driverRegistration.maritalstatus} onChange={handleInputChange}>
                                        <option value="Please choose">Please choose</option>
                                        <option value="Civil Partnered">Civil Partnered</option>
                                        <option value="Common Law">Common Law</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Married">Married</option>
                                        <option value="Separated">Separated</option>
                                        <option value="Single">Single</option>
                                        <option value="Widowed">Widowed</option>
                                    </select>
                                    {/* {maritalstatus.error && 
                                        <span  className="vds-form__validation-text">{maritalstatus.error}</span>
                                    } */}
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="home_owner_dropdown">Are you a home owner?</label>
                                    <select id="home_owner_dropdown" className="vds-form__input vds-form__input--select " name="homeowner" data-hj-suppress="true" value={driverRegistration.homeowner} onChange={handleInputChange}>
                                        <option value="Please choose">Please choose</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {/* {homeowner.error && 
                                        <span  className="vds-form__validation-text">{homeowner.error}</span>
                                    } */}
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="occupation_text_input">What’s your occupation?
                                            <span id="occupation_tooltip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                            <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" />
                                            <span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}>
                                                <span className="vds-tooltip__text-inner">We have more than 2000 occupations in our database. If yours isn’t there, pick the closest match from the list</span>
                                            </span>
                                        </span>
                                    </label>
                                    <div className="vds-autocomplete">
                                        <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="autosuggest__container">
                                            <input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" className="vds-form__input " placeholder="e.g. Financial advisor" name="occupation" value={driverRegistration.occupation} onChange={handleInputChange}/>
                                            <div id="react-autowhatever-1" role="listbox" className="autosuggest__suggestions-container" />
                                            {/* {occupation.error && 
                                                <span  className="vds-form__validation-text">{occupation.error}</span>
                                            } */}
                                        </div>
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey ">
                                {/* vds-form__group--disabled */}
                                    <label className="vds-form__label" htmlFor="employee_status_dropdown">What’s your employment status?</label>
                                    <select id="employee_status_dropdown" className="vds-form__input vds-form__input--select "  name="dropdowndemployeestatus" data-hj-suppress="true" value={driverRegistration.dropdowndemployeestatus} onChange={handleInputChange}>
                                        <option value="Please choose">Please choose</option>
                                        <option value="Company">Company</option>
                                        <option value="Contractor">Contractor</option>
                                        <option value="Employed">Employed</option>
                                        <option value="Employed (Temporary)">Employed (Temporary)</option>
                                        <option value="Financially Assisted">Financially Assisted</option>
                                        <option value="Full-time Education">Full-time Education</option>
                                        <option value="Housewife / Husband">Housewife / Husband</option>
                                        <option value="Independent Means">Independent Means</option>
                                        <option value="NNot Employed Due To Disability">Not Employed Due To Disability</option>
                                        <option value="g_NOTFTEMP">Not In Full-time Employment</option>
                                        <option value="Retired">Retired</option>
                                        <option value="Self Employed">Self Employed</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Voluntary Work">Voluntary Work</option>
                                    </select>
                                    {/* disabled */}
                                    {/* {dropdowndemployeestatus.error && 
                                        <span  className="vds-form__validation-text">{dropdowndemployeestatus.error}</span>
                                    } */}
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey ">
                                {/* vds-form__group--disabled */}
                                    <label className="vds-form__label" htmlFor="business_type">What industry do you work in?</label>
                                    <div className="vds-autocomplete">
                                        <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" className="autosuggest__container">
                                            <input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" className="vds-form__input " placeholder="e.g. Finance Company" id="business_type" name="business_type" value={driverRegistration.business_type} onChange={handleInputChange}/>
                                            <div id="react-autowhatever-1" role="listbox" className="autosuggest__suggestions-container" />

                                            {/* {disabledBusinessType} */}

                                            {/* {business_type.error && 
                                                <span  className="vds-form__validation-text">{business_type.error}</span>
                                            } */}
                                        </div>
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="driver_experience_year_dropdown">How long have you had your current driving licence for?
                                            <span id="driver_experience_labelToolTip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                            <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" />
                                            <span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}>
                                                <span className="vds-tooltip__text-inner">You can find this on the back of your photocard driving licence. It's displayed in the ‘valid from’ column, next to the car icon
                                            </span>
                                            </span>
                                        </span>
                                    </label>
                                    <div className="vds-form__group vds-form__group--inline">
                                        <div className="vds-form__group-section vds-form__group-section--full-width">
                                            <label className="vds-form__label" htmlFor="driver_experience_year_dropdown" />
                                            <select id="driver_experience_year_dropdown" className="vds-form__input vds-form__input--select " name="driverexperienceyear" data-hj-suppress="true" value={driverRegistration.driverexperienceyear} onChange={handleInputChange}>
                                                <option value="Years">Years</option>
                                                <option value="0">Less Than 1</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20 or More</option>
                                            </select>

                                            {/* {driverexperienceyear.error && 
                                                <span  className="vds-form__validation-text">{driverexperienceyear.error}</span>
                                            } */}
                                        </div>
                                        <div className="vds-form__group-section vds-form__group-section--full-width">
                                            <label className="vds-form__label" htmlFor="driver_experience_month_dropdown" />
                                            <select id="driver_experience_month_dropdown" className="vds-form__input vds-form__input--select " name="driverexperiencemonth" data-hj-suppress="true" value={driverRegistration.driverexperiencemonth} onChange={handleInputChange}>
                                                <option value="Months">Months</option>
                                                <option value="0">Less Than 1</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                            </select>

                                            {/* {driverexperiencemonth.error && 
                                                <span  className="vds-form__validation-text">{driverexperiencemonth.error}</span>
                                            } */}
                                        </div>
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--form-journey-button">
                                    <div>
                                        <label className="vds-form__label" htmlFor="address_lookup_input">Your postcode</label>
                                        <div className>
                                            <input autoComplete="off" className="vds-form__input " id="address_lookup_input" type="text" name="postCode" maxLength={8} placeholder="e.g. ST47 1EY" spellCheck="false" data-hj-suppress="true" value={driverRegistration.postCode} onChange={handleInputChange}/>
                                            {/* name="text" */}
                                            {/* {postCode.error && 
                                                <span  className="vds-form__validation-text">{postCode.error}</span>
                                            } */}
                                        </div>
                                        <button id="address_lookup_button" className="vds-button">
                                            Find address
                                        </button>
                                    </div>
                                </div>
                                
                                {/* <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="email_input">Email address</label>
                                    <div className>
                                        <input autoComplete="off" className="vds-form__input" id="email_input" type="email" name="email" maxLength={50} placeholder="e.g. stanley@email.co.uk" spellCheck="false" data-hj-suppress="true" />
                                    </div>
                                    <p className="vds-form__supporting-text vds-form__supporting-text--margin-top" />
                                    <p>We'll use this email address or telephone number to contact you about your quote or your plan.
                                                                                    <br />
                                        <br />
                                        If you don't buy a plan but would like us to send you a new quote next year, please tick the box below.
            </p>
                                    <p />
                                    <div className="vds-checkbox"><input type="checkbox" className="vds-checkbox__input" id="allow_remarketing" />
                                        <label className="vds-checkbox__label" htmlFor="allow_remarketing">Please email me</label>
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--checklist-limit-width" style={{ "margin": "auto" }}>
                                    <label className="vds-form__label" htmlFor="contact-number">Mobile number</label>
                                    <div className="vds-form__grouped">
                                        <span id="contact_number_addon" className="vds-form__grouped-addon">+44</span>
                                        <input autoComplete="off" className="vds-form__input vds-form__grouped-input" id="contact_number" type="tel" pattern="[0-9]*" inputMode="numeric" maxLength={11} placeholder="e.g. 7123456789" data-hj-suppress="true" />
                                    </div>
                                </div>
                                <br />
                                <div id="coverDetailsSection" className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="ncb_dropdown">How many years of no-claims discount (NCD) do you have?<span id="ncb_tooltip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                        <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" />
                                        <span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}>
                                            <span className="vds-tooltip__text-inner">We may ask for proof of NCD when the plan starts. You can upload this to our website, email it, or post it. If you don’t give us proof of NCD within 14 days, or you give wrong information, we could later cancel your plan. <a href="http://vitality.co.uk/">Learn more</a>
                                            </span>
                                        </span>
                                    </span>
                                    </label>
                                    <select id="ncb_dropdown" className="vds-form__input vds-form__input--select " name="driverncbvalue" data-hj-suppress="true">
                                        <option value="Please choose">Please choose</option>
                                        <option value="0">None</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9 Or More</option>
                                    </select>
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="mileage_input">What’s your estimated annual mileage?
                                        <span id="mileage_labelToolTip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                            <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" />
                                            <span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}><span className="vds-tooltip__text-inner">This is how many miles you think you’ll drive in your car over the next 12 months. If you use it for work, include any business mileage, too</span>
                                            </span>
                                        </span>
                                    </label>
                                    <div className>
                                        <input autoComplete="off" className="vds-form__input" id="mileage_input" type="mileage" name="mileage" pattern="[0-9]*" maxLength={7} placeholder="e.g. 8,000" spellCheck="false" data-hj-suppress="true" />
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <label className="vds-form__label" htmlFor="vehicle_parking">Where do you leave your car overnight?</label>
                                    <div className="vds-form__help-content">
                                        <p>Select an option from below</p>
                                    </div>
                                    <div className="vds-radio-card">
                                        <div className="vds-radio-card__cards">
                                            <div className="vds-radio-card__card">
                                                <input type="radio" className="vds-visually-hidden vds-radio-card__radio" name="parkingName" id="parkingId" />
                                                <label className="vds-radio-card__label" htmlFor="overnight-driveway">
                                                    <span className="vds-visually-hidden">Locked garage</span>
                                                </label>
                                                <div className="vds-radio-card__content">
                                                    <div className="vds-radio-card__header">
                                                        <img alt width={110} height={65} id="wide_image" className="vds-radio-card__header-img" src="https://members.vitality.co.uk/car-insurance/online-quote/-/jssmedia/quote-buy/data/media/img/garage.ashx?h=78&w=110&hash=A348DF480750B6B23DE350F52328F99D" />
                                                    </div>
                                                    <div className="vds-radio-card__info">
                                                        <span className="vds-radio-card__content-label">Locked garage</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vds-radio-card__card">
                                                <input type="radio" className="vds-visually-hidden vds-radio-card__radio" name="parkingName" id="parkingId" />
                                                <label className="vds-radio-card__label" htmlFor="overnight-driveway">
                                                    <span className="vds-visually-hidden">Driveway</span>
                                                </label>
                                                <div className="vds-radio-card__content">
                                                    <div className="vds-radio-card__header">
                                                        <img alt width={110} height={65} id="wide_image" className="vds-radio-card__header-img" src="https://members.vitality.co.uk/car-insurance/online-quote/-/jssmedia/quote-buy/data/media/img/driveway.ashx?h=78&w=110&hash=8533AB02930056565791600FA74BDBB6" />
                                                    </div>
                                                    <div className="vds-radio-card__info">
                                                        <span className="vds-radio-card__content-label">Driveway</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vds-radio-card__card">
                                                <input type="radio" className="vds-visually-hidden vds-radio-card__radio" name="parkingName" id="parkingId" />
                                                <label className="vds-radio-card__label" htmlFor="overnight-driveway">
                                                    <span className="vds-visually-hidden">Outside Home</span>
                                                </label>
                                                <div className="vds-radio-card__content">
                                                    <div className="vds-radio-card__header">
                                                        <img alt width={110} height={65} id="wide_image" className="vds-radio-card__header-img" src="https://members.vitality.co.uk/car-insurance/online-quote/-/jssmedia/quote-buy/data/media/img/outside-home.ashx?h=78&w=110&hash=E2C419209E3701330E5F8BE0D6B63515" />
                                                    </div>
                                                    <div className="vds-radio-card__info">
                                                        <span className="vds-radio-card__content-label">Outside Home</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vds-radio-card__card">
                                                <input type="radio" className="vds-visually-hidden vds-radio-card__radio" name="parkingName" id="parkingId" />
                                                <label className="vds-radio-card__label" htmlFor="overnight-driveway">
                                                    <span className="vds-visually-hidden">Other</span>
                                                </label>
                                                <div className="vds-radio-card__content">
                                                    <div className="vds-radio-card__header">
                                                        <img alt width={110} height={65} id="wide_image" className="vds-radio-card__header-img" src="https://members.vitality.co.uk/car-insurance/online-quote/-/jssmedia/quote-buy/data/media/img/other.ashx?h=78&w=110&hash=C3BA25A5170EC60A77933FA7C7B22C9E" />
                                                    </div>
                                                    <div className="vds-radio-card__info">
                                                        <span className="vds-radio-card__content-label">Other</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="date_div" className="vds-form__group vds-form__group--accordion vds-form__group--form-journey">
                                    <div className="vds-form">
                                        <div className="vds-form__field">
                                            <label className="vds-form__label" htmlFor="datepicker">When do you want your cover to start?
                                                <span id="cover_start_labelToolTip" aria-expanded="false" className="vds-tooltip vds-tooltip--arrow-bottomright vds-form__label-tooltip">
                                                    <span className="vds-tooltip__trigger vds-tooltip__trigger--icon" />
                                                    <span aria-hidden="true" className="vds-tooltip__text" style={{ "left": "auto" }}>
                                                        <span className="vds-tooltip__text-inner">Your plan goes live at 12:01am on this date (and it’s when you can start earning good driving rewards)</span>
                                                    </span>
                                                </span>
                                            </label>
                                            <div className="vds-form__datepicker vds-form__datepicker--range">
                                                <input id="datepicker" className="vds-form__input vds-form__datepicker-input vds-form__datepicker-input--single flatpickr-input" name="datepicker-input" type="hidden" data-input="true" placeholder="Choose cover start date" defaultValue />
                                                <input className="vds-form__input vds-form__datepicker-input vds-form__datepicker-input--single form-control input" placeholder="Choose cover start date" tabIndex={0} type="text" readOnly="readonly" />
                                                <button id="cover_start_date_button" className="vds-form__datepicker-button" title="select date" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vds-form__group vds-form__group--form-journey">
                                    <div className="vds-form__group vds-form__group--form-journey">
                                        <p className="vds-form__supporting-text">
                                            <button className="vds-icon-link vds-icon-link--plus vds-margin-bottom-spacing-2" type="button" aria-hidden="false" id="main_driver_add_link">
                                                <span className="vds-icon-link__text">Add named driver</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                             */}

                             <div className="submitBtn">
                                <button className="vds-form-journey__button vds-button" id="" aria-label="Submit" title="Submit" onClick={handleSubmit}>Submit</button>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="vds-form-journey__actions">
                    <div className="vds-form-journey__action-previous">
                        <button className="vds-form-journey__button vds-button vds-button--line vds-button--grey" id="button_back" aria-label="Back" title="Back">Back</button>
                    </div>
                    <div className="vds-form-journey__action-next">
                        <button className="vds-form-journey__button vds-button" id="button_next" aria-label="Next" title="Next">Next</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default DriverDetails
