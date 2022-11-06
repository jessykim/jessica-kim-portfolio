import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar(props) {
  return (
    <nav className="navigation-bar">
      <NavLink to='/'>
        <FontAwesomeIcon icon={props.faFaceSmile} />
      </NavLink>
      <NavLink to='/about'>
      <FontAwesomeIcon icon={props.faAddressCard} />
      </NavLink>
      <NavLink to='/projects'>
      <FontAwesomeIcon icon={props.faCode} />
      </NavLink>
      <NavLink to='/resume'>
        <FontAwesomeIcon icon={props.faBriefcase} />
      </NavLink>
      <NavLink to='/contact'>
        <FontAwesomeIcon icon={props.faComments} />
      </NavLink>
    </nav>
  )
}

export default NavBar;