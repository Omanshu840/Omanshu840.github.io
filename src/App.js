import React from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Footer from './components/Footer'
import Contact from './components/Contact';

const App = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const [darkMode, setDarkMode] = React.useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Hero toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Education/>
      <Activities />
      <Projects/>
      <Skills />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
