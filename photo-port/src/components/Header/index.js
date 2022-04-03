import React, { useState } from "react";
import Nav from "../Nav"
import About from "../About"
import Contact from "../Contact"
import Portfolio from "../Portfolio"

function Header({ currentPage, handlePageChange }){

    return (
    
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
               <h3>Ryan Weiler</h3>
            </a>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </div>
    </nav>
    
    )
};

export default Header