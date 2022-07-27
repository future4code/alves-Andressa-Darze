import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { login } from '../../services/users'

const LoginForm = () => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({ email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    }

  return (
    <div>
        <form onSubmit={onSubmitForm}>
           <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            required
            type={"email"}
           />
           <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
            // type={"password"} 
           />
           <button>Login</button>
        </form>

    </div>
  )
}

export default LoginForm