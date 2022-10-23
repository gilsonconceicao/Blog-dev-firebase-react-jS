import React from 'react'
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Blog</h3>
      <p>Blog criado por <a href="https://github.com/gilsonconceicao" target='_blank'>Gilson Conceição</a>   &copy; 2022</p>
    </footer>
  )
}

export default Footer