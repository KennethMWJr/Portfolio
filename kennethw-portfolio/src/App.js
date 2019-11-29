import React from 'react';
import logo from './logo.svg';
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
    <body>
     <AboutMe />
     <SelectedProjects />
     <ContactMe />
     </body>

    </div>
  );
}

export default App;
