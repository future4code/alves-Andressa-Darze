import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/users'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const SignUpForm = () => {
    const navigate = useNavigate()

    const {states, setters, requests} = useContext(GlobalStateContext)

    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setters.setRightButtonText)
    }

  return (
    <div>
        <form onSubmit={onSubmitForm}>
            <input
                name={"username"}
                value={form.username}
                onChange={onChange}
                placeholder="Nome de usuário"
                required
            />
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
            <button>Cadastrar</button>
        </form>
    </div>
  )
}

export default SignUpForm