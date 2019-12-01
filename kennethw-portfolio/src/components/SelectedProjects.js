import React from 'react';


console.log("../images/Screen Shot 2019-11-29 at 3.48.27 PM.png")


function SelectedProjects() {
    return(
        <div >
            <div className="background-selected-projects">
                <div className= "selected-projects" id="selected-projects">
                    <h1>Selected Projects</h1>
                </div>
                <div className="wrapper-projects">
                    <div className= "project-card">
                        <a href="https://pages.git.generalassemb.ly/KennethMWJr/NYC-Community-Gardens-by-Jurisdiction-/">
                            <img alt="WebApp1" src={require('../images/Screen Shot 2019-11-29 at 3.48.27 PM.png')}/>
                        </a>
                        <p className= "description">A website built using HTML5, Bootstrap, and Vanilla JavaScript. It also uses an API from NYC Open Data.</p>
                    </div>
                    <div className= "project-card">
                        <a href="http://nature-calming-effect.surge.sh">
                            <img alt="WebApp2" src={require('../images/Screen Shot 2019-11-29 at 4.34.21 PM.png')}/>
                        </a>
                        <p className= "description">A React App using a Pixabay API and CSS to render photos and videos of nature.  </p>
                    </div>
                    <div className= "project-card">
                        <a href="https://limitless-citadel-56053.herokuapp.com/">
                            <img alt="WebApp3" src={require('../images/Screen Shot 2019-11-29 at 4.37.04 PM.png')}/>
                        </a>
                        <p className= "description">A full stack app applying CRUD with React, CSS and Ruby on Rails.</p>
                    </div>
                </div>
            </div>
        </div>
    ); 
}


export default SelectedProjects; 