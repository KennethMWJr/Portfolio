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
        <div>
            <h1>Kenneth M. Williamns Jr</h1>
       
            {/* <Menu> */}
                <Anchorlink href='./AboutMe'>About Me</Anchorlink>
                <Anchorlink href='./SelectedProjects'>Selected Projects</Anchorlink> 
                <Anchorlink href='./ContactMe'>Contact Me</Anchorlink>       
            {/* </Menu> */}
        </div>
        
        )
    }       
    
}


export default Nav ; 