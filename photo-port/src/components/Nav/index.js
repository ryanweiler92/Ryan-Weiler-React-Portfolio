import React from "react";

function Nav(){

    return (
    <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active text-white" href="/about">
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link active text-white" href="#">Portfolio</a>
            </li>
            <li>
                <a className="nav-link active text-white" href="#">
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link active text-white" href="#">Resume</a>
            </li>
        </ul>
    </div>
    )
}

export default Nav;