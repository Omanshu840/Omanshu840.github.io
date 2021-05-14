import React from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
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
      <BrowserRouter>
        <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Switch>
          <Route exact path="/">
            <Hero toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            <Education/>
            <Activities />
            <Projects limit={2}/>
            <Skills />
          </Route>

          <Route exact path="/projects">
            <Projects limit={100}/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

          <Route path="*" >
            <PageNotFound/>  
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
