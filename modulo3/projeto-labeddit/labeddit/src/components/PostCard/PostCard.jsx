import React from 'react'
import styled from 'styled-components'
import { createPostVote } from '../../services/posts'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const PostCard = (props) => {

  const {states, setters, requests} = useContext(GlobalStateContext)

  return (
    <PostCardStyle>
      <p>Enviado por: {props.username}</p>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>Comentários: {props.commentCount ? props.commentCount : 0}</p>

      <VoteButtonStyle>
        <button onClick={requests.like(props.postId)}>Like</button>
        <p>Votos:{props.voteSum}</p>
        <button onClick={requests.dislike(props.postId)}>Dislike</button>
      </VoteButtonStyle>
      
      <button onClick={props.onClick}>Ver post</button>
    </PostCardStyle>
  )
}

export default PostCard

const PostCardStyle = styled.div`
  border-style: solid ;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`

const VoteButtonStyle = styled.div`
  display: flex;
`