import './App.css'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Project from './sections/Project'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
// import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
import { useState } from 'react'
import IntroAnimation from './components/IntroAnimation'

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish = {() => setIntroDone(true)} />}
      {introDone && (
        <div className='relative gradient text-white'>
          <CustomCursor/>
          {/* <ParticlesBackground/> */}
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Project/>
          <Experience/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default App
