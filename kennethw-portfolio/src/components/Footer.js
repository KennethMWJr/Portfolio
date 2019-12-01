import React from 'react';


function Footer() {
    return(

        <div className="footer">
            <p>And follow me at</p>
            <a href="https://www.linkedin.com/in/kenneth-williams-0606419/"><img className="linkedin" alt="Linkedin" src={require('../images/LI-In-Bug.png')}/></a>
            <a href="https://github.com/KennethMWJr"><img className="github" alt="github" src={require('../images/GitHub-Mark-Light-120px-plus.png')}/></a>
        </div>
           
    ); 
}


export default Footer; 