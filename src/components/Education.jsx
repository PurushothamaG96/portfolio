import React from 'react';
import "./Education.css"
function Education(props) {
    return (
        <>
        <div className="container education-container">
            <h1 className='display-2 text-primary'>Education</h1>
            <div className='sub-education-container'>
                <div className='me-2'>
                    <img className='rounded-5' src="https://coursereport-production.imgix.net/uploads/school/logo/1312/original/10x_Academy_logo.png?w=72&h=72&dpr=1&q=75" alt="" />
                </div>
                <div>
                    <h3>10x Academy</h3>
                    <h4>Fullstack developer on MERN</h4>
                </div>
            </div>
            <div className='sub-education-container'>
                <div className='me-2'>
                    <img className='rounded-5 vtu' src="https://vtu.ac.in/wp-content/uploads/2019/03/vtul-291x300.png" alt="" />
                </div>
                <div>
                    <h3>BGS Institute of Technology BG Nagar</h3>
                    <h4>Bachelor of Engineering in Mechanical Engineering from VTU</h4>
                </div>
            </div>
            <div className='sub-education-container'>
                <div className='me-2'>
                    <img className='rounded-5 vtu' src="https://content3.jdmagicbox.com/comp/bangalore/23/080p5152223/catalogue/board-of-technical-examinations-palace-road-bangalore-government-organisations-28w0d77.jpg" alt="" />
                </div>
                <div>
                    <h3>SET Polytechnic Melkote</h3>
                    <h4>Diploma in Mechanical Engineering from DTE</h4>
                </div>
            </div>
            <div className='sub-education-container'>
                <div className='me-2'>
                    <img className='rounded-5 vtu' src="https://3.bp.blogspot.com/-X1fih8YIlu4/WrSRAE-AQnI/AAAAAAAAB_M/fVb2THvql8UiqRTVErIdVwQUiVj7ARk6ACLcBGAs/s1600/karnataka-sslc-results.jpeg" alt="" />
                </div>
                <div>
                    <h3>SMR High School Magadi</h3>
                    <h4>Secondery School Leaving Certificate from KSEEB</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default Education;