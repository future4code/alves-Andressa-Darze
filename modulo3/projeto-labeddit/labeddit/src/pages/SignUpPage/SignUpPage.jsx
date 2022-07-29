import React from 'react'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = () => {
  useUnprotectedPage()
  return (
    <div>
      <h2>SignUpPage</h2>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage