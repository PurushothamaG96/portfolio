import React from 'react';
import "./home.css"
import "./Contactme.css"
import { Link } from 'react-router-dom';
function Contactme(props) {
    return (
            <div className='container contact-container'>
                <div className='sub-contact-container contact-left'>
                    <div className='contact-rowss'>
                    <h1 className='text-primary display-3 my-2'>Contact me</h1>  
                    </div>
                    <div className='contact-rowss'>
                        <h4 className='text-muted'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</h4>
                    </div >
                    <div className='d-flex contact-rows'>
                        <i className='fa fa-mobile fa-3x text-warning align-items-center mx-3'></i>
                        <h3 className='text-info'>7760065791</h3>
                    </div>
                    <div className='d-flex  contact-rows'>
                        <i className='fa fa-envelope fa-3x text-danger align-items-center mx-3'></i>
                        <h3 className='text-info'>purushothamachar96@gmail.com</h3>
                    </div>
                    <div className='contact-icons'>
                        <a href='https://linkedin.com/in/purushothama-g-2935b0204/' target="_blank">
                            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='Linkdin'/>
                        </a>
                        <a href='https://github.com/PurushothamaG96' target="_blank">
                            <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU' alt='Linkdin'/>
                        </a>
                        </div>


                </div>
                <div className='sub-contact-container contact-right'>
                    <img style={{width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-q2kd_2PodRp3UnEML0s3OvsaCJSmE45bA&usqp=CAU" alt="" />
                </div>
            </div>
        
    );
}

export default Contactme;