import React, { useState } from "react";
import Nav from "../Nav"
import About from "../About"
import Contact from "../Contact"
import Portfolio from "../Portfolio"

function Header(){

    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
  
      if (currentPage === 'About') {
        return <About />
      }
      if (currentPage === 'Contact') {
        return <Contact />
      } 
      if (currentPage === 'Portfolio') {
        return <Portfolio />
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);

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