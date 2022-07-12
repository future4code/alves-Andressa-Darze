import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'

export const TripDetailsPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h2>TripDetailsPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}
