import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'
import axios from "axios"
import { BASE_URL } from '../constants/constants'

const options = [
  { value: 1, label: " Viagem 1" },
  { value: 2, label: " Viagem 2" },
  { value: 3, label: " Viagem 3" },
  { value: 4, label: " Viagem 4" },
]


export const ApplicationFormPage = (props) => {

  const navigate = useNavigate()

  const [trips, setTrips] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [applicationText, setApplicationText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")

  const applyToTrip = (id) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const body = {
        name: name,
        age: Number(age),
        applicationText: applicationText,
        profession: profession,
        country: country
    }

    axios.post(`${BASE_URL}/trips/${id}/apply`, body, headers)
    .then((res) => {
      alert(res.data.message)
      setName("")
      setAge("")
      setApplicationText("")
      setProfession("")
      setCountry("")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleAge = (event) => {
    setAge(event.target.value)
  }
  const handleApplicationText = (event) => {
    setApplicationText(event.target.value)
  }
  const handleProfession = (event) => {
    setProfession(event.target.value)
  }
  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  const handleTrips = (event) => {
    setTrips(Array.isArray(event) ? event.map((x) => x.label) : [])
  }

  return (
    <div>
      <h2>ApplicationFormPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>

      <select 
        options={options}
        placeholder={'Escolha uma viagem:'}
        onChange={handleTrips}
        onSelect={handleTrips}
      />

      <input 
        value={name}
        onChange={handleName}
        placeholder='Nome'
      />
       <input 
        value={age}
        onChange={handleAge}
        placeholder='Idade'
      />
       <input 
        value={applicationText}
        onChange={handleApplicationText}
        placeholder='Texto de candidatura'
      />
       <input 
        value={profession}
        onChange={handleProfession}
        placeholder='Profissão'
      />
       <input 
        value={country}
        onChange={handleCountry}
        placeholder='País'
      />

      <button onClick={() => applyToTrip()}>Enviar</button>
      
    </div>
  )
}
