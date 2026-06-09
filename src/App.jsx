import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import MyProject from './Components/MyProjects/MyProject'
import Achievements from './Components/Achievements/Achievements'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />  
    <MyProject/> 
    <Achievements />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
