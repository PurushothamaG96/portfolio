import React, {useState} from 'react';
import {Link} from "react-router-dom"
import "./Nav.css"
function Nav() {
    const [bar, setBar] = useState("fa-bars")
    const [hideNav, setHideNav] = useState("close")
    const handleBars =()=>{
        if(bar==="fa-bars"){
            setBar("fa-close")
            setHideNav("open")
        }
        else{
            setBar("fa-bars")
            setHideNav("close")
        }
    }
    return (
        <nav>
            <div className='container nav-container'>
                <h1 className='font'>{`<`}<span className='text-primary '>Purushothama</span>{`/>`}</h1>
                <ul className={`${hideNav}`}>
                    <li className='px-3'><Link to={"/"} className="Link">Home</Link></li>
                    <li className='px-3'><Link to={"/project"} className="Link">Project</Link></li>
                    <li className='px-3'><Link to={"/education"} className="Link">Education</Link></li>
                    <li className='px-3'><Link to={"/contact"} className="Link">Contact me</Link></li>
                </ul>
                <button className='btn btn-white' id='hide-bars' onClick={handleBars}><i className={`fa ${bar} text-primary`}></i></button>
                
                
            </div>
        </nav>

    );
}

export default Nav;