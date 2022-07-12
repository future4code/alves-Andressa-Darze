import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToTripDetailsPage } from '../routes/Coordinator'

export const AdminHomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>AdminHomePage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
      <button>Logout</button>
      <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes de uma viagem</button>
    </div>
  )
}
