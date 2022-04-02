import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [projects] = useState([
    {
        name: "XYZ Rentals",
        technologies: "MYSQL2, Sequelize, Express"
    },
    {
        name: "College Search",
        technologies: "Javascript, CSS, HTML, API"
    },
    {
        name: "Local Restaurant Reviewer",
        technologies: "MYSQL2, Sequelize, Express"
    },
    {
        name: "Soccer Standings & News",
        technologies: "Javascript, CSS, HTML, API"
    }
]);
  
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
        <Portfolio></Portfolio>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
