import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import NavBar from './components/navbar';
import About from './pages/about';
import Contact from './pages/contact';
import './App.css'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projects" element={ <Projects /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    </>
  )
}

export default App;