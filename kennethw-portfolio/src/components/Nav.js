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
            <h1 className= "name">Kenneth M. Williamns Jr.</h1>
       
            {/* <Menu> */}
            {/* <div className= "nav-link-wrapper"> */}
                <Anchorlink className= "nav-link" href='./ContactMe'>Contact</Anchorlink>
                <Anchorlink className= "nav-link" href='./SelectedProjects'>Selected Projects</Anchorlink>   
                <Anchorlink className= "nav-link" href='./AboutMe'>About Me</Anchorlink>     
            {/* </div> */}
            {/* </Menu> */}
        </div>
        
        )
    }       
    
}


export default Nav ; 