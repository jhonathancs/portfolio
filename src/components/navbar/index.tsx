import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import Logo from '../../pages/logo';

function NavBar() {
  
  const [clicked, setClicked] = useState(true);

  useEffect (() => {
    const handler = () => {
      setClicked(true);
    }
    document.addEventListener("mousedown", handler)
  })

  const handleClick = () => {
    setClicked(!clicked);
  };
  
  return (
    <nav>
        <NavLink to="/">{Logo}</NavLink>
        <div>
        <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>
          </li>  
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
       <i id="bar" className={clicked ? 'fas fa-bars' : 'fas fa-bars'}></i>
      </div>
    </nav>
  )
}

export default NavBar;

