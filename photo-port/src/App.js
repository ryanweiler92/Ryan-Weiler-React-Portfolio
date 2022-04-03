import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'


function App() {

  return (
    <div className="myDiv">
      <Header  />
       
      {/* <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
