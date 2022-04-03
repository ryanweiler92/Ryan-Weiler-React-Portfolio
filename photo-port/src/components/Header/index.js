import React from "react";
import Nav from "../Nav"

function Header(){

    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
               <h3>Ryan Weiler</h3>
            </a>
            <Nav />
        </div>
    </nav>
    )
};

export default Header