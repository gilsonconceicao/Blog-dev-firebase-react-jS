import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UsePostsGerate } from '../../contexts/geretePostsContext';

const NewPosts = () => {
  // states form
  const [displayName, setDisplayName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [imagePost, setImagePost] = useState('');
  const [description, setDescription] = useState('');
  const [profile, setProfileUser] = useState('');

  //message error
  const [messageError, setMessageError] = useState('');

  const { submitDataPost, setPosts, message, setMessage, loading } = UsePostsGerate()

  const handleSubmitDataForm = (e) => {
    e.preventDefault();

    const dataUserPost = {
      displayName,
      title,
      description
    }

    if (displayName != '' && title != '' && description != ''
      && profile != '' || imagePost == '' || imagePost != '') {
      console.log(dataUserPost);
      setMessageError('');
      submitDataPost(displayName, description, title, profile, imagePost, lastName);

      //reload
      setPosts('');
      // clear form
      setDescription('');
      setDisplayName('');
      setTitle('');
      setProfileUser('');
    } else {
      setMessageError('Preencha todos os campos para prosseguir.');
      setMessage('');
    }
  }

  return (
    <div>
      <h2 className='title_global'>Crie a sua publicação</h2>
      <form onSubmit={handleSubmitDataForm}>
        <div className='flex_input'>
          <label>
            Nome
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder='Digite o seu nome'
            />
          </label>
          <label>
            Sobrenome
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Digite o seu sobrenome'
            />
          </label>
        </div>

        <div className='flex_input'>

          <label>
            Usuário do github
            <span className='message'>Com o seu gihub podemos espandir ainda mais as ideias.</span>
            <input
              type="text"
              defaultValue='https://github.com/'
              onChange={(e) => setProfileUser(e.target.value)}
              placeholder='Digite o seu GitHub'
            />
          </label>

          <label className='input_image'>
            Imagem (opcional)
            <span className='message'>Google, freepik, pexels...</span>
            <input
              type="text"
              value={imagePost}
              onChange={(e) => setImagePost(e.target.value)}
              placeholder='Digite o endereço da imagem (link)'
            />
          </label>
        </div>

        <label>
          Título da publicação
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Digite um título'
          />
        </label>

        <label>
          Descrição da publicação
          <span className='message'>Pode relatar problemas, vivências, conquistas e conteúdos construtivos ligado a programação.</span>
          <textarea
            name="description"
            cols="10"
            placeholder='Digite a descição'
            rows="7"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>



        {messageError && (<p className='messageError'>{messageError}</p>)}
        {message && (<p className='messageSendOk'>{message} <a href='/posts'>ver postagem</a></p>)}
        {loading && (<p className='messageLoading'>Salvando postagem...</p>)}
        <button className='btn'>Criar post</button>
      </form>
    </div>
  )
}

export default NewPosts; 