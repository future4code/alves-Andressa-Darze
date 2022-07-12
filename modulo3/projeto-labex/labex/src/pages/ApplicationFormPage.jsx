import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'

export const ApplicationFormPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h2>ApplicationFormPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      
    </div>
  )
}
