import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navigation-bar">
      <NavLink to='/'>Jessica Kim</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/resume'>Resume</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}

export default NavBar;