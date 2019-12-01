import React from 'react';
import AboutMe from './AboutMe';
import SelectedProjects from './SelectedProjects';
import ContactMe from './ContactMe'
import Anchorlink from 'react-anchor-link-smooth-scroll'
// import {slide as Menu} from 'react-burger-menu'

class Nav extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

render() {
    return(
        <div className= "nav">
            <h1 className= "name">Kenneth M. Williams Jr.</h1>
       
            
            {/* <div className= "nav-link-wrapper"> */}
                <a className= "nav-link" href='#contact-me'>Contact</a>
                <a className= "nav-link" href='#selected-projects'>Selected Projects</a>   
                <a className= "nav-link" href='#about-me'>About Me</a>     
            {/* </div> */}
    
        </div>
        
        )
    }       
    
}


export default Nav ; 