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
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
        <button>test</button>
    </>
  )
}

export default App