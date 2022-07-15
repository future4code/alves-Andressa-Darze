import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { goBack, goToCreateTripPage, goToTripDetailsPage, goToLoginPage } from '../routes/Coordinator'
import { useProtectedPage } from '../constants/constants'
import { BASE_URL } from '../constants/constants'
import styled from 'styled-components'

const CardTrip = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`


export const AdminHomePage = () => {
  
  const navigate = useNavigate()

  useProtectedPage()

  const [listTrips, setListTrips] = useState([])

  const token = localStorage.getItem('token')

  useEffect(() => {
    const token = localStorage.getItem('token')
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

  // TÁ DANDO O MESMO ERRO DO DECIDECANDIDATE!
  const deleteTrip = (id) => {
    const headers = {
        "Content-Type": "application/json",
        "auth": token
    }

    axios.delete(`${BASE_URL}/trips/${id}`, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

  const newListTrips = listTrips.map((trip) => {
    return (
      <CardTrip key={trip.id}>
        <h3>{trip.name}</h3>
        <h4>{trip.description}</h4>
        <h4>Planeta: {trip.planet}</h4>
        <h4>Duração: {trip.durationInDays} dias</h4>
        <h4>Data: {trip.date}</h4>
        <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>Detalhes</button>
        <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
      </CardTrip>
    )
  })


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
      
      {newListTrips}
    </div>
  )
}
