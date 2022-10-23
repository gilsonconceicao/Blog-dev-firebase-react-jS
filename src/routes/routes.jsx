import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Footer from '../components/Footer';
//components
import NavBar from '../components/NavBar'
import Home from '../pages/home/Home';
import NewPosts from '../pages/newPosts/NewPosts';
// pages
import Posts from '../pages/posts/Posts'

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/newposts' element={<NewPosts/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesPage