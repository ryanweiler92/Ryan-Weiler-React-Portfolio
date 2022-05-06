import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'


function App() {

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
    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="myDiv d-flex flex-column min-vh-100">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
