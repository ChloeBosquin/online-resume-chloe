import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import CTA from './CTA.jsx'; 
import GirlImage from '../../assets/chloe_bosquin.png'; 
console.log(GirlImage); 


const Header = () => {
    return (
        <header>
            <div className="container container--flex-column container--flex-center">
                <div className="container__columns-10">
                    <h5>Hi, I am</h5>
                    <h1>Chloe Bosquin</h1>
                    <h4>Web Developer</h4>
                    <CTA/>
                </div>
                <div className="container header__image">
                    <img src={GirlImage} alt="header profile image" />
                </div>
            </div>
            <div class="scroll">      
                <p> Scroll Down</p>
                <FontAwesomeIcon icon="fa-solid fa-arrow-down-long" />
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </header>


    )
}

export default Header