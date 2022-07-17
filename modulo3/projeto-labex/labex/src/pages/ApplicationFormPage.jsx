import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'
import axios from "axios"
import { BASE_URL } from '../constants/constants'
import useForm from '../hooks/useForm'

export const ApplicationFormPage = (props) => {

  const navigate = useNavigate()

  // ---- PEGANDO LISTA DE VIAGENS ----
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
// ------------------------------------
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: ""
  })

  const applyToTrip = (event) => {
    event.preventDefault()
    const headers = {
        "Content-Type": "application/json"
    }
  
    axios.post(`${BASE_URL}/trips/${form.trip}/apply`, form, headers)
    .then((res) => {
      alert(res.data.message)
      cleanFields()
    
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h2>ApplicationFormPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>


      <form onSubmit={applyToTrip}>
        <select 
          name="trip"
          value={form.trip}
          onChange={onChange}
          placeholder='Viagem'
          required
        >
          {listTrips.map((trip) => {
            return (
              <option key={trip.id} value={trip.id}>{trip.name}</option>
            )
          })}
        </select>

        <input 
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder='Nome'
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
        <input
          name="age" 
          value={form.age}
          onChange={onChange}
          placeholder='Idade'
          required
          type={"number"}
          min={18}
          title={"Idade mínima é 18 anos"}
        />
        <input
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          placeholder='Texto de candidatura'
          required
          pattern={"^.{30,}"}
          title={"O texto deve ter no mínimo 30 dígitos"}
        />
        <input 
          name="profession"
          value={form.profession}
          onChange={onChange}
          placeholder='Profissão'
          required
          pattern={"^.{10,}"}
          title={"O texto deve ter no mínimo 10 dígitos"}
        />
        {/* TEM QUE SER UM DROPDOWN */}
        <input 
          name="country"
          value={form.country}
          onChange={onChange}
          placeholder='País'
          required
        />

        <button>Enviar</button>
      </form>
      
    </div>
  )
}
