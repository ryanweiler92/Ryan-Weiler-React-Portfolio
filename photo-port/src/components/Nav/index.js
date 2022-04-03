import React from "react";

function Nav({ currentPage, handlePageChange }){

    return (
    <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a  
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === "About" ? 'nav-link active text-white' : 'nav-link text-white'} >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === "Portfolio" ? 'nav-link active text-white' : 'nav-link text-white'} >
                    Portfolio
                </a>
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