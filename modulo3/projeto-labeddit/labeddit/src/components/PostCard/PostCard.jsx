import React from 'react'
import styled from 'styled-components'
import { createPostVote } from '../../services/posts'

const PostCard = (props) => {
  return (
    <PostCardStyle>
      <p>Enviado por: {props.username}</p>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>Comentários: {props.commentCount ? props.commentCount : 0}</p>

      <VoteButtonStyle>
        <button onClick={() => createPostVote(props.postId, 1)}>Voto +</button>
        <p>Votos:{props.voteSum}</p>
        <button onClick={() => createPostVote(props.postId, -1)}>Voto -</button>
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