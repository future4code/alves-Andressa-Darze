import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { login } from '../../services/users'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { InputStyle } from './style'


const LoginForm = () => {
  const navigate = useNavigate()

  const { states, setters, requests } = useContext(GlobalStateContext)

  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setters.setRightButtonText)
  }

  return (

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


  )
}

export default LoginForm