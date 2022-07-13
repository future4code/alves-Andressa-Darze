import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'
import { useProtectedPage } from '../constants/constants'
import { axios } from 'axios'
import { BASE_URL } from '../constants/constants'

export const TripDetailsPage = () => {

  const navigate = useNavigate()

  useProtectedPage()

  const getTripDetails = (id) => {
    axios.get(`${BASE_URL}/trip/${id}`)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  return (
    <div>
      <h2>TripDetailsPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}
