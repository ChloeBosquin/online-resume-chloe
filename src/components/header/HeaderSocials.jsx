import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {MdOutlineEmail} from "react-icons/md"
import {ImAttachment} from "react-icons/im"

const HeaderSocials = () => {
    return (
            <div class="header__socials">      
                <a href="https://www.linkedin.com/in/chlo%C3%A9-bosquin-366ba9110/" className="header__social-link" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
                <a href="https://github.com/ChloeBosquin/" className="header__social-link" target="_blank" rel="noopener noreferrer"><BsGithub/></a>  
                <a href="mailto:chloe.bosquin@gmail.com" className="header__social-link"><MdOutlineEmail/></a>    
                {/* <a onClick={() => window.location = 'mailto:chloe.bosquin@domain.com'} className="header__social-link"><MdOutlineEmail/></a>                */}
            </div>
    )
}

export default HeaderSocials;