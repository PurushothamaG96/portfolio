import React from 'react';
import "./Education.css"
function Education(props) {
    return (
        <>
        <div className="container education-container">
            <h1 className='display-2'>Education</h1>
            <div className='sub-education-container'>
                <div className='me-2'>
                    <img className='rounded-5' src="https://coursereport-production.imgix.net/uploads/school/logo/1312/original/10x_Academy_logo.png?w=72&h=72&dpr=1&q=75" alt="" />
                </div>
                <div>
                    <h3>10x Academy</h3>
                    <h4>Fullstack developer on MERN</h4>
                    <h4>2022-Till now</h4>
                </div>
            </div>
            <div className='sub-education-container'>
                <div className='me-2'>
                    <img className='rounded-5 vtu' src="https://vtu.ac.in/wp-content/uploads/2019/03/vtul-291x300.png" alt="" />
                </div>
                <div>
                    <h3>BGS Institute of Technology BG Nagar Mandya</h3>
                    <h4>Bachelor of Engineering in Mechanical Engineering</h4>
                    <h4>2017-2020</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default Education;