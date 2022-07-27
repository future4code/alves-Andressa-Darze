import React from 'react'
import PostCard from '../../components/PostCard/PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { goToPostPage } from '../../routes/Coordinator'

const FeedPage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  const posts = useRequestData([], `${BASE_URL}/posts`)

  const onClickCard = (id) => {
    goToPostPage(navigate, id)
  }

  const postsCards = posts.map((post) => {
    return(
      <PostCard 
        key={post.id}
        title={post.title}
        body={post.body}
        username={post.username} 
        commentCount={post.commentCount}
        voteSum={post.voteSum}
        onClick={() => onClickCard(post.id)}
      />
      
    )
  })

  return (
    <div>
      <h2>FeedPage</h2>
      <PostsListContainer>
        {postsCards}
      </PostsListContainer>
    </div>
  )
}

export default FeedPage

const PostsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: center;
`