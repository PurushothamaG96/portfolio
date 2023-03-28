import React, {useState} from 'react';
import {Link} from "react-router-dom"
import "./Nav.css"
function Nav(props) {

    const [bar, setBar] = useState("fa-bars")
    const [hideNav, setHideNav] = useState("close")
    // const [colors, setColors] = useState({iconColor:"text-dark",background:"normal-background" })
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
    const handleColor=()=>{
        if(props.colors.background==="normal-background"){
            props.setColors({iconColor:"text-warning", background:"dark-background", main_app:"black"})
        }
        else{
            props.setColors({iconColor:"text-dark",background:"normal-background", main_app:"white" })
        }
    }
    return (
        <nav className={`${props.colors.background}`}>
            <div className='container nav-container'>
                <h1 className='font'>{`<`}<span className='text-primary '>Purushothama</span>{`/>`}</h1>
                <ul className={`${hideNav}`}>
                    <li className='px-3'><Link to={"/"} className="Link">Home</Link></li>
                    <li className='px-3'><Link to={"/about"} className="Link">About</Link></li>
                    <li className='px-3'><Link to={"/project"} className="Link">Project</Link></li>
                    <li className='px-3'><Link to={"/education"} className="Link">Education</Link></li>
                    <li className='px-3'><Link to={"/contact"} className="Link">Contact us</Link></li>
                </ul>
                <div>
                <i className={`fa fa-sun fa-2x px-3 ${props.colors.iconColor} icon`} onClick={handleColor}></i>
                <button className='btn btn-white' id='hide-bars' onClick={handleBars}><i className={`fa ${bar} text-primary fa-2x`}></i></button>
                
                </div>
               
                
            </div>
        </nav>

    );
}

export default Nav;