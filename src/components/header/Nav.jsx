import React from "react"
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
        console.log(activeNav);


    return (
            <div class="nav-bar">      
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav__link active' : 'nav__link'}><span>About</span></a>
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'nav__link active' : 'nav__link'}><span>Experience</span></a>
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skillst' ? 'nav__link active' : 'nav__link'}><span>Skills</span></a>
                <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'nav__link active' : 'nav__link'}><span>Education</span></a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'nav__link active' : 'nav__link'}><span>Projects</span></a>
                <a href="#contact" onClick={() => setActiveNav('#skills')} className={activeNav === '#contact' ? 'nav__link active' : 'nav__link'}><span>Contact</span></a>
            </div>
    )
}

export default Nav;