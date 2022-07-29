import React from 'react'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { FormStyle } from './style'


const LoginPage = () => {
  useUnprotectedPage()

  const navigate = useNavigate()

  return (
    <div>
      <h2>LoginPage</h2>
      <LoginForm />
      <button onClick={() => goToSignUpPage(navigate)}>Fazer cadastro</button>
    </div>
  )
}

export default LoginPage