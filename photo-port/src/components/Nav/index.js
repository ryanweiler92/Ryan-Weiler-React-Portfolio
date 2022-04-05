import React from "react";

function Nav({ currentPage, handlePageChange }){

    return (
    <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a  
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className='nav-link text-white' 
                    >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className='nav-link text-white'
                    >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className='nav-link text-white'
                >
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