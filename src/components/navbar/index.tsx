import { NavLink } from 'react-router-dom';
import './navbar.css'
import Logo from '../../pages/logo';



function NavBar() {
  return (
    <nav>
        <NavLink to="/">{Logo}</NavLink>
        <ul className='navbar'>
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
    </nav>
  )
}

export default NavBar;