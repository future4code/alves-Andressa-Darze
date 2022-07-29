import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/cadastro' element={<SignUpPage />} />
            <Route path='/feed' element={<FeedPage />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router