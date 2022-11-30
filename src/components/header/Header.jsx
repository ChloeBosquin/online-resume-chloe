import React from "react";
import './header.css';
import CTA from './CTA.jsx'; 
import GirlImage from '../../assets/chloeCartoon.png'; 
console.log(GirlImage); 

const Header = () => {
    return (
        <header>
            <div className="hero-pattern flex items-center justify-center pt-48">
                <div className="basis-3/4 text-center hero-pattern">
                    <h5 className="font-sans text-3xl pb-4 font-medium text-slate-800">Hello world, I am</h5>
                    <h1 className="text-7xl font-bold pb-5 font-sans text-slate-800">Chloe Bosquin</h1>
                    <h3 className="font-sans text-3xl pb-5 text-slate-800">Web Developer</h3>
                    <CTA/>
                </div>
            </div>

            <div className="header__image">
                <img src={GirlImage} alt="header profile image" />
            </div>

        </header>
    )
}

export default Header