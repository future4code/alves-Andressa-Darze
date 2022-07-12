import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../routes/Coordinator'

export const ListTripsPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h2>ListTripsPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
    </div>
  )
}
