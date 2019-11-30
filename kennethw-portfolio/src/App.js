import React from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import SelectedProjects from './components/SelectedProjects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div>
    <header>
      <Nav />
    </header>
     <AboutMe />
     <SelectedProjects />
     <ContactMe />
    </div>
  );
}

export default App;
