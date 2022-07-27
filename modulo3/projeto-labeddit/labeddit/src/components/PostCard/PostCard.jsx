import React from 'react'
import styled from 'styled-components'

const PostCard = (props) => {
  return (
    <PostCardStyle>
      <p>Enviado por: {props.username}</p>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>Votos: {props.voteSum}</p>
      <p>Comentários: {props.commentCount}</p>
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