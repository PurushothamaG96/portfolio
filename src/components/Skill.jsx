import React from 'react';
import "./Skil.css"
function Skill(props) {
    return (
        <>
        <div className="container">
            <h1 className='display-3 text-primary'>Skills</h1>
            <div className="skill-container">
                        <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt=""/>
                        <img src="https://icones.pro/wp-content/uploads/2021/05/icone-html-bleue.png" alt=""/>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt=""/>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt=""/>
                        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt=""/>
            </div>
        </div>
        </>
    );
}

export default Skill;