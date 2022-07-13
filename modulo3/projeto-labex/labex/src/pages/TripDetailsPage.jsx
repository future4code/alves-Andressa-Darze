import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'
import { useProtectedPage } from '../constants/constants'

export const TripDetailsPage = () => {

  const navigate = useNavigate()

  useProtectedPage()

  return (
    <div>
      <h2>TripDetailsPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}
