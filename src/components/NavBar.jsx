import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'; 
import {FaBlog} from 'react-icons/fa';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [show, setShow] = useState(false);
  // toggle menu 
  const handleToggeNavBar = () => setShow(true);
  const handleCloseMenu = () => setShow(false); 
  
  const handleDirection = () => {
    setShow(false);   
  }

  return (
    <header className={styles.header}>
      <h2><FaBlog/></h2>
      {show && <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink
              to='/'
              onClick={handleDirection}
              className={({ isActive }) => (isActive ? styles.active : "")}>Início</NavLink>
          </li>
          <li>
            <NavLink to='/posts' onClick={handleDirection}>Ver postagens</NavLink>
          </li>
          <li>
            <NavLink to='/newposts' onClick={handleDirection}>Publicar no blog</NavLink>
          </li>
        </ul>
      </nav>}
      {show ? <button onClick={handleCloseMenu}>
        X
      </button> :
        <button onClick={handleToggeNavBar}>
          <GiHamburgerMenu />
        </button>
      }
    </header>
  )
}

export default NavBar