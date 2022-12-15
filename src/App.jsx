import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <About />
        <Testimonials />
        <Experience/>
        <Contact />
        <Footer />
    </>
  )
}

export default App