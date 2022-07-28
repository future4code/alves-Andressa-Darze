import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import PostCard from '../../components/PostCard/PostCard'
import { BASE_URL } from '../../constants/urls'
import CommentCard from '../../components/CommentCard/CommentCard'

const PostPage = () => {
  useProtectedPage()
  const params = useParams()

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

  console.log(commentsCards)
  
  return (
    <div>
      <h2>PostPage</h2>
      {params.id}
      <PostCard />
      {commentsCards}
      
    </div>
  )
}

export default PostPage