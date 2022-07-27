import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import PostCard from '../../components/PostCard/PostCard'

const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  
  return (
    <div>
      <h2>PostPage</h2>
      {params.id}
      <PostCard />
      
    </div>
  )
}

export default PostPage