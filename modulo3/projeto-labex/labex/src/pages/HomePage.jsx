import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToListTripsPage, goToLoginPage } from '../routes/Coordinator'

export const HomePage = () => {
  
  const navigate = useNavigate()

  return (
    <div>
      <h2>HomePage</h2>
      <button onClick={() => goToListTripsPage(navigate)}>Ver viagens</button>
      <button onClick={() => goToLoginPage(navigate)}>Administração</button>

    </div>

    
  )
}

