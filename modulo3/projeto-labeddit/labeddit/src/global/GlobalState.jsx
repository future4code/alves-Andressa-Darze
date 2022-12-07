import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL, HEADERS } from '../constants/urls'
import GlobalStateContext from "./GlobalStateContext"



const GlobalState = (props) => {

  // Botão de login/logout no header
  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  // Informações do post específico no PostCard
  const [postInfo, setPostInfo] = useState({
    title: "",
    body: "",
    username: "",
    commentCount: 0,
    voteSum: 0
  })

  // Lógica de like/dislike
  const [stateLike, setStateLike] = useState(false)
  const [likePost, setLikePost] = useState(false)
  const [dislikePost, setDislikePost] = useState(false)

  const like = (id) => {
    if(likePost === true) {
      setLikePost(!likePost)
      removePostVote(id)
    }else {
      const body = {
        direction: 1
      }
      axios.post(`${BASE_URL}/posts/${id}/votes`, body, HEADERS)
      .then((res) => {
        setLikePost(true)
        setStateLike(!stateLike)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  const dislike = (id) => {
    if(dislikePost === true) {
      setDislikePost(!dislikePost)
      removePostVote(id)
    } else {
      const body = {
        direction: -1
      }
      axios.put(`${BASE_URL}/posts/${id}/votes`, body, HEADERS)
      .then((res) => {
        setDislikePost(!dislikePost)
        setStateLike(!stateLike)
      })
      .catch()
    }
  }
 

  const removePostVote = (id) => {
    axios.delete(`${BASE_URL}/post/${id}/votes`, HEADERS)
    .then((res) => {
      console.log(res)
      setStateLike(!stateLike)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const states = { rightButtonText, postInfo }
  const setters = { setRightButtonText, setPostInfo }
  const requests = {like, dislike}

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState