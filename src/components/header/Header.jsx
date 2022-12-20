import React from "react";
import CTA from './CTA.jsx'; 
import GirlImage from '../../assets/chloe_bosquin.png'
import HeaderSocials from "./HeaderSocials.jsx";

const Header = () => {
    return (
        <header>
              <div className="container">
            <div className=" container container--flex-column container--flex-center">
                <div className="container__columns-10">
                    <h5>Hello World ! I am</h5>
                    <h1>Chloe Bosquin</h1>
                    <h4>Web Developer</h4>
                    <CTA/>
                </div>
                <div className="container header__image">
                    <img src={GirlImage} alt="header profile image" />
                </div>
            </div>
            <HeaderSocials/>
            </div>
        </header>


    )
}

export default Header