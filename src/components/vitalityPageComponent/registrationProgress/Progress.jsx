import React from 'react'

const Progress = () => {
    return (
        <div>
            <div className="vds-progress-bar">
                <div className="vds-progress-bar__inner">
                    <div className="vds-progress-bar__indicator" style={{"width":"20%"}} />
                </div>
            </div>

            <div className="vds-progress-path">
                <div className="vds-progress-path__inner">
                    <div className="vds-progress-path__title-container">
                        <h1 id="quote_header_current_step_text" className="vds-progress-path__primary-title">Car details</h1>
                    </div>
                    <div className="vds-progress-path__progress">
                        <span className="vds-progress-path__progress-text">1 of 5</span>
                    </div>
                    <div className="vds-progress-path__position">
                        <div className="vds-progress-path__back">
                            <a href="#" className="vds-progress-path__back-link"  style={{"visibility":"hidden"}}>Back</a>
                        </div>
                    </div>
                    <div className="vds-progress-path__next">
                        <span id="quote_header_next_step_text" className="vds-progress-path__next-step">Next: Confirm car details</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress
