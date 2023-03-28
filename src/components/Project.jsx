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
                <a href="https://contact-manager-oe9x.onrender.com/" target="_blank">
                    <h1 className="text-white text-center">Contact Manager</h1>
                    <img className='hide-image' src="https://i.pcmag.com/imagery/roundups/03xvQQX5euoq30C7pYTGlPZ-2.fit_lim.size_850x490.v1631145621.jpg" alt=" Contact-manager" />
                    <p className='hide text-white'>Application allow users to register and login. Login navigate to home page where user can manage and store the personal contacts.</p>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://instaclone-frontend-5o0w.onrender.com/" target="_blank">
                    <h1 className="text-white text-center">Instaclone</h1>
                    <img className='hide-image' src="https://s3.amazonaws.com/ionic-marketplace/instaclone/icon.png" alt=" Contact-manager" />
                    <p className='hide text-white'>A Social media application that allows to user view others posts and share their photos.</p>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://purushothama-fub-game.onrender.com" target="_blank">
                    <h1 className="text-white text-center">Shooting Game</h1>
                    <img className='hide-image' src="https://previews.123rf.com/images/_fla/_fla1211/_fla121100099/16468935-sniper-target.jpg" alt=" Contact-manager" />
                    <p className='hide text-white'>A Shoot game that allows to user shoots the targets</p>
                    </a>
                </div>
            </div>
                

            </div>
        </div>
    );
}

export default Project;