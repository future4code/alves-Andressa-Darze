import React, { useEffect } from 'react'
import PostCard from '../../components/PostCard/PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { goToPostPage } from '../../routes/Coordinator'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/posts'

const FeedPage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  const getPosts = useRequestData([], `${BASE_URL}/posts`)

  const onClickCard = (id) => {
    goToPostPage(navigate, id)
  }

  const postsCards = getPosts.map((post) => {
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

  // Form de Criar Novo Post

  const [form, onChange, clear] = useForm({ title: "", body: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    createPost(form, clear)
  }

  return (
    <div>
      <h2>FeedPage</h2>

      <form onSubmit={onSubmitForm}>
        <input 
          name={"title"}
          value={form.title}
          onChange={onChange}
          placeholder="Título"
          required
        />
        <input
          name={"body"}
          value={form.body}
          onChange={onChange}
          placeholder="Escreva seu post..."
          required
        />
        <button>Postar</button>
      </form>

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