import React from 'react';
import "./Project.css"
import { Link } from 'react-router-dom';
function Project(props) {
    return (
        <div className='container'>
            <div className='project-container'>
            <h1 className='display-3 text-primary'>Projects</h1>
            <div className='card-container'>
                <div className='project-card'>
                <a href="https://instaclone-frontend-5o0w.onrender.com/" target="_blank">
                    <h1 className="text-white text-center">Contact Manager</h1>
                    <img className='hide-image' src="https://i.pcmag.com/imagery/roundups/03xvQQX5euoq30C7pYTGlPZ-2.fit_lim.size_850x490.v1631145621.jpg" alt=" Contact-manager" />
                    <p className='hide text-white'>Conatct Manager Project built for save and manage the Personel contacts by login with own credentials.</p>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://instaclone-frontend-5o0w.onrender.com/" target="_blank">
                    <h1 className="text-white text-center">Instaclone</h1>
                    <img className='hide-image' src="https://s3.amazonaws.com/ionic-marketplace/instaclone/icon.png" alt=" Contact-manager" />
                    <p className='hide text-white'>Istaclone project built for view other image and story posts and post own story and images others to view. Simply say Social media.</p>
                    </a>
                </div>
            </div>
                

            </div>
        </div>
    );
}

export default Project;