import React from "react";
import CV from '../../assets/ChloeBosquin-FrontEndDeveloper-Resume.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a className="button button--one" href={CV} download>Download CV</a>
            <a className="button button--two" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Let's Talk</a>
        </div>
    )
}

export default CTA