import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import PostCard from '../../components/PostCard/PostCard'
import { BASE_URL } from '../../constants/urls'
import CommentCard from '../../components/CommentCard/CommentCard'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import styled from 'styled-components'
import { createPostVote } from '../../services/posts'

const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  const {states, setters, requests} = useContext(GlobalStateContext)

  // COMENTÁRIOS
  const getPostComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

  const commentsCards = getPostComments.map((comment) => {
    return (
      <CommentCard
        key={comment.id}
        id={comment.id}
        body={comment.body}
        voteSum={comment.voteSum}
        userVote={comment.userVote}
      />
    )
  })
  
  return (
    <div>
      <h2>PostPage</h2>
      
      <PostCardStyle>
        <p>Enviado por: {states.postInfo.username}</p>
        <h2>{states.postInfo.title}</h2>
        <p>{states.postInfo.body}</p>
        <p>Comentários: {states.postInfo.commentCount ? states.postInfo.commentCount : 0}</p>

        <VoteButtonStyle>
          <button onClick={() => createPostVote(params.id, 1)}>Voto +</button>
          <p>Votos:{states.postInfo.voteSum}</p>
          <button onClick={() => createPostVote(params.id, -1)}>Voto -</button>
        </VoteButtonStyle>
        
      </PostCardStyle>
      
      <h3>Comentários</h3>
      {commentsCards}
      
    </div>
  )
}

export default PostPage


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