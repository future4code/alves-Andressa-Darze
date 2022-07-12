import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../routes/Coordinator'
import axios from "axios"
import { BASE_URL } from '../constants/constants'

export const ListTripsPage = () => {

  const navigate = useNavigate()

  const [listTrips, setListTrips] = useState([])

  useEffect(() => {
    getTrips()
  }, [])

  const getTrips = () => { 
    axios.get(`${BASE_URL}/trips`)
    .then((res) => {
        setListTrips(res.data.trips)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  const newListTrips = listTrips.map((trip) => {
    return (
      <div key={trip.id}>
        <h4>{trip.name}</h4>
        <h4>{trip.description}</h4>
        <h4>{trip.planet}</h4>
        <h4>{trip.durationInDays}</h4>
        <h4>{trip.date}</h4>
        <hr/>
      </div>
    )
  })

  return (
    <div>
      <h2>ListTripsPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
      {newListTrips}
    </div>
  )
}
