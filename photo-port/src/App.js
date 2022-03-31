import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Contact from './components/Contact'

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div className="myDiv">
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
        <About></About>
          </>
        ) : (
        <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
