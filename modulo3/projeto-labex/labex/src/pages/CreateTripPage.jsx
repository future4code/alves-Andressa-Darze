import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'
import { useProtectedPage } from '../constants/constants'
import useForm from '../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../constants/constants'

export const CreateTripPage = () => {

  const navigate = useNavigate()

  useProtectedPage()

  const token = localStorage.getItem('token')

  const {form, onChange, cleanFields} = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const createTrip = (event) => {
    event.preventDefault()
    const headers = {
        "Content-Type": "application/json",
        "auth": token
    }

    axios.post(`${BASE_URL}/trips`, form, headers)
    .then((res) => {
        console.log(res)
        // cleanFields()
    })
    .catch((err) => {
        console.log(err)
    })
}

  return (
    <div>
      <h2>CreateTripPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>

      <form onSubmit={createTrip}>
        <input 
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome da viagem"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 letras"}
        />
        {/* Fazer drop down */}
         <input 
          name="planet"
          value={form.planet}
          onChange={onChange}
          placeholder="Planeta"
          required
        />
         <input 
          name="date"
          value={form.date}
          onChange={onChange}
          placeholder="Data"
          required
          type={"date"}
        />
        <input 
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{30,}"}
          title={"O texto deve ter no mínimo 30 dígitos"}
        />
         <input 
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração em dias"
          required
          type={"number"}
          min={50}
          title={"A duração deve ser de no mínimo 50 dias"}
        />
        <button>Criar viagem</button>
      </form>

      
    </div>
  )
}
