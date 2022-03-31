import React from "react";

function Nav(){

    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
               <h3>Ryan Weiler</h3>
            </a>
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="/about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav;