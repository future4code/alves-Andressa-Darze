import React from 'react'
import styled from 'styled-components'
import { createCommentVote } from '../../services/comments'

const CommentCard = (props) => {
  return (
    <CommentCardStyle>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <VoteButtonStyle>
        <button onClick={() => createCommentVote(props.id, 1)}>Voto +</button>
        <p>Votos:{props.voteSum}</p>
        <button onClick={() => createCommentVote(props.id, -1)}>Voto -</button>
      </VoteButtonStyle>
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
const VoteButtonStyle = styled.div`
  display: flex;
`