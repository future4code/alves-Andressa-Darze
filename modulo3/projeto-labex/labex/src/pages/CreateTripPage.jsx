import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'
import { useProtectedPage } from '../constants/constants'

export const CreateTripPage = () => {

  const navigate = useNavigate()

  useProtectedPage()

  return (
    <div>
      <h2>CreateTripPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Criar viagem</button>
    </div>
  )
}
