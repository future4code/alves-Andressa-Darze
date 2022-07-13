import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage, goToHomePage } from '../routes/Coordinator'
import { BASE_URL } from '../constants/constants'
import axios from "axios"

export const LoginPage = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (event) => {
    setEmail(event.currentTarget.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    const headers = {
        "Content-Type": "application/json"
    }

    const body = {
        email: email,
        password: password
    }

    axios.post(`${BASE_URL}/login`, body, headers)
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
      
      <input  
        value={email}
        onChange={handleEmail}
        placeholder='Email'
      />

      <input 
        value={password}
        onChange={handlePassword}
        placeholder='Senha'
      />

      <button onClick={onSubmitLogin}>Entrar</button>

    </div>
  )
}
