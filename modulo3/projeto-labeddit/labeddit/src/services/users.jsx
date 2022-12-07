import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { goToFeedPage } from "../routes/Coordinator";

export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert("Login feito com sucesso!")
        clear()
        goToFeedPage(navigate)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        console.log(err)
    })
}

export const signUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert("Cadastro feito com sucesso!")
        clear()
        goToFeedPage(navigate)
        setRightButtonText("Logout")

    })
    .catch((err) => {
        alert(`Erro: ${err.response.data}`)
    })
}