import React, { useState } from 'react';
import { GrSend, GrUpdate } from 'react-icons/gr';
import { UsePostsGerate } from '../../contexts/geretePostsContext';
import { BsGithub, BsSearch } from 'react-icons/bs';
import styles from './Posts.module.css';
import { Navigate } from 'react-router-dom';

const Posts = () => {
  const [search, setSearch] = useState('');
  const [newPost, setNewPost] = useState(false); 
  //get data of context
  const { posts, isPosts } = UsePostsGerate();

  const handleUpdateListPost = () => {
    window.location.href = '/posts'
  }

  const handleNewPost = () => setNewPost(true)

  const resultSearch = search.length > 0 ?
    posts.filter(data => data.title.includes(search)) : [];


  return (
    <section className={styles.container_posts}>
      <div>
        <header className={styles.flex_header_posts}>
          <div>
            <h2>Posts</h2>
            <p className={styles.subtitle}>Veja o seu e acompanhe todos os posts.</p>
            <div className={styles.flex_options}>  
              {!isPosts && <button className={styles.btnRefresh} title='Atualiza a página' onClick={handleUpdateListPost}><GrUpdate /></button>}

              <button className={styles.btnRefresh} title='Atualiza a página' onClick={handleNewPost}>+</button>
              {newPost && <Navigate to='/newposts'/>}

            </div>
          </div>
          <div className={styles.camp_search}>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Buscar por palavra chave'
            />
            <p className={styles.icon}><BsSearch /></p>
          </div>
        </header>
        {search.length > 0 ?
          <div className={styles.postsAll}>
            {
              resultSearch.map(post => (
                <div key={post.id} className={styles.posts}>
                  <div className={styles.nameAndLink}>
                    <a href={post.profile} target='_blank'>
                      <BsGithub />
                    </a>
                    <span className={styles.nameUser}>{post.displayName}</span>
                  </div>
                  <div className={styles.textAboutData}>
                    <span className={styles.date}>Publicado <br />{post.datePost}</span>
                    <h4>{post.title}</h4>
                    <img src={post.imagePost} alt={post.tilte} />
                    <p>{post.description}</p>
                  </div>
                </div>
              ))}
          </div>
          :
          <div className={styles.postsAll}>
            { isPosts ? <p className='messageLoadingPost'>Buscando dados recentes...</p> :
              posts.map(post => (
                <div key={post.id} className={styles.posts}>
                  <div className={styles.nameAndLink}>
                    <a href={post.profile} className={styles.referenceGit} target='_blank'>
                      <BsGithub />
                    </a>
                    <span className={styles.nameUser}>{post.displayName} {post.lastName}</span>
                  </div>
                  <div className={styles.textAboutData}>
                    <span className={styles.date}>Publicado <br />{post.datePost}</span>
                    <h4>{post.title}</h4>
                    <img src={post.imagePost} alt={post.tilte} />
                    <p>{post.description}</p>
                  </div>
                </div>
              ))}
          </div>
        }
      </div>

      <div className={styles.interactives}>
        <h3>Dicas para produtividade</h3>
        <ul className={styles.guide_dev}>
          <li><a href="https://pt.stackoverflow.com/" target='_blank'>Stackoverflow</a></li>
          <li><a href="https://developer.mozilla.org/" target='_blank'>Developer Moxilla Docs </a></li>
          <li><a href="https://www.w3schools.com/" target='_blank'>w3schools</a></li>
          <li><a href="https://click.discord.com/" target='_blank'>Deviceshots</a></li>
          <li><a href="https://dev.to/" target='_blank'>Dev to guide</a></li>
        </ul>
        <h3>Aonde estudar</h3>
        <ul className={styles.guide_dev}>
          <li><a href="https://www.cursoemvideo.com/" target='_blank'>Curso em vídeo</a></li>
          <li><a href="https://www.udemy.com/pt/" target='_blank'>Udemy</a></li>
          <li><a href="https://recode.org.br/" target='_blank'>Recode</a></li>
          <li><a href="https://www.alura.com.br/" target='_blank'>Alura</a></li>
          <li><a href="https://rocketseat.com.br/" target='_blank'>Rocketseat</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Posts