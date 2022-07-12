import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToAdminHomePage } from '../routes/Coordinator'

export const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>

    </div>
  )
}
