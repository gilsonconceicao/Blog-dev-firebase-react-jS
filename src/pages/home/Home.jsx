import React from 'react';
import { Link } from 'react-router-dom';
import imageBlog from '../../assets/img/image_blog.png'; 

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container_welcome} >
      <div>
        <h2>Fala dev</h2>
        <p>E ai, vamos compartilhar conteúdo ligados a programação? <br />  <span className={styles.paragraph}>Compartilhar conhecimentos e experiências é sempre uma das melhores formas de aprender.</span></p>
        <Link to='/posts'>Começar</Link>
      </div>
      <div>
        <img src={imageBlog} alt="imagem_blog" />
      </div>
    </section>
  )
}

export default Home