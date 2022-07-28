import React from 'react'
import styled from 'styled-components'

const CommentCard = (props) => {
  return (
    <CommentCardStyle>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>Votos: {props.voteSum}</p>
    </CommentCardStyle>
  )
}

export default CommentCard

const CommentCardStyle = styled.div`
  border-style: solid ;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`