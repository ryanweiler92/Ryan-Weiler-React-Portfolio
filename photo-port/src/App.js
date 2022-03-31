import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>

    </div>
  );
}

export default App;
