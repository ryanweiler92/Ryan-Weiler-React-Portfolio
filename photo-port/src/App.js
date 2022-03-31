import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main>
        <About></About>
      </main>

    </div>
  );
}

export default App;
