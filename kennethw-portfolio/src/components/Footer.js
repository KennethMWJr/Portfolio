import React from 'react';


function Footer() {
    return(

        <div className="footer">
            <p>And follow me at</p>
            <a href="https://www.linkedin.com/in/kenneth-williams-0606419/"><img className="linkedin" alt="Linkedin" src={require('../images/linkedin.png')} srcSet={`${require('../images/linkedin@2x.png')} 2x`}/></a>
            <a href="https://github.com/KennethMWJr"><img className="github" alt="github" src={require('../images/github.png')} srcSet={`${require('../images/github@2x.png')} 2x`}/></a>
        </div>
           
    ); 
}


export default Footer; 