import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToTripDetailsPage, goToLoginPage } from '../routes/Coordinator'
import { useProtectedPage } from '../constants/constants'

export const AdminHomePage = () => {
  
  const navigate = useNavigate()

  useProtectedPage()

  const useLogOut = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }

  return (
    <div>
      <h2>AdminHomePage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
      <button onClick={useLogOut}>Logout</button>
      <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes de uma viagem</button>
    </div>
  )
}
