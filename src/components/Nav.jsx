import React from 'react';
import {Link} from "react-router-dom"
import "./Nav.css"
function Nav() {
    return (
        <nav>
            <div className='container nav-container'>
                <h1>{`<`}<span className='text-primary'>Purushothama</span>{`/>`}</h1>
                <ul>
                    <li className='px-3'><Link to={"/"} className="Link">Home</Link></li>
                    <li className='px-3'><Link to={"/project"} className="Link">Project</Link></li>
                    <li className='px-3'><Link to={"/education"} className="Link">Education</Link></li>
                    <li className='px-3'><Link to={"/contact"} className="Link">Contact me</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;