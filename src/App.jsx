import React, { useRef, useEffect } from "react";
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollHighlightNabbar from "./components/header/Nav";

const App = () => {
  const aboutRef = useRef();
  const section2Ref = useRef();
  const experienceRef = useRef();
  const skillsRef = useRef();
  const testimonialRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const navHeader = [
    {
      headerTitle: "About",
      headerRef: aboutRef,
      headerID: "about"
    },
    {
      headerTitle: "Experience",
      headerRef: experienceRef,
      headerID: "experience"
    },
    {
      headerTitle: "Skills",
      headerRef: skillsRef,
      headerID: "skills"
    },
    {
      headerTitle: "Testimonials",
      headerRef: testimonialRef,
      headerID: "testimonials"
    },
    {
      headerTitle: "Portfolio",
      headerRef: portfolioRef,
      headerID: "portfolio"
    },
    {
      headerTitle: "Contact",
      headerRef: contactRef,
      headerID: "contact"
    }
  ];

  return (
    <>

      <div className="App">
        <Header />
        <ScrollHighlightNabbar contactRef={contactRef} navHeader={navHeader} />
        <div className="container container--about container--flex-column container--flex-center" ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={experienceRef} className="container" id="experience">
          <Experience/>
        </div>
        <div className="container container__columns-10" ref={skillsRef} id="skills">
          <Skills/>
        </div>
        <div className="container--BackgroundYellow" ref={testimonialRef} id="testimonials">
          <Testimonials />
        </div>
        <div className="container container__columns-8" ref={portfolioRef} id="portfolio">
          <Portfolio/>
        </div>
        <div>
          <div ref={contactRef} id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>     
    </>
  )
}

export default App