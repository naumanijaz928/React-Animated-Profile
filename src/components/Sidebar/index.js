import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/N.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin ,faGithub,faYoutube,faSkype} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
   
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope}  color="4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/numan-ijaz-757682147">
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/technofun">
            <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UCFMQauIRY1kwT7e0SckTTVw">
            <FontAwesomeIcon icon={faYoutube} color="4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://join.skype.com/invite/ptqXu9QzF10y">
            <FontAwesomeIcon icon={faSkype} color="4d4d4e"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
