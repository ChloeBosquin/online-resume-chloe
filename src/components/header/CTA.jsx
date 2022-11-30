import React from "react";
import CV from '../../assets/ChloeBosquin-FrontEndDeveloper-Resume.pdf'

const CTA = () => {
    return (
        <div className="container--cta">
            <a className="text-slate-white rounded bg-salmon w-16 font-bold p-1 sans-gothic" href={CV} download>Download CV</a>
            <a className="bg-blue rounded w-16 font-bold p-1" >Let's Talk</a>
        </div>
    )
}

export default CTA