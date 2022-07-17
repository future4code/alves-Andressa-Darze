import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage, goToHomePage } from '../routes/Coordinator'
import { BASE_URL } from '../constants/constants'
import axios from "axios"
import useForm from '../hooks/useForm'

export const LoginPage = () => {

  const navigate = useNavigate()

  const {form, onChange, clenFields} = useForm({
    email: "",
    password: ""
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const headers = {
        "Content-Type": "application/json"
    }

    axios.post(`${BASE_URL}/login`, form, headers)
    .then((res) => {
      alert('Login feito com sucesso!')
      localStorage.setItem('token', res.data.token)
      navigate('/admin/trips/list')
        
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      
      <form onSubmit={onSubmitLogin}>
        <input  
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder='Email'
        />
        <input 
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder='Senha'
          type={"password"}
        />
        <button>Entrar</button>
      </form>

    </div>
  )
}
