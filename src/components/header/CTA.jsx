import React from "react";
import CV from '../../assets/ChloeBosquin-FrontEndDeveloper-Resume.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a className="button button--two" href={CV} download>Download CV</a>
            <a className="button button--one" >Let's Talk</a>
        </div>
    )
}

export default CTA