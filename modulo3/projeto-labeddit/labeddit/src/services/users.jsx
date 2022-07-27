import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { goToFeedPage } from "../routes/Coordinator";

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        clear()
        goToFeedPage(navigate)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert("Cadastro feito com sucesso!")
        clear()
        goToFeedPage(navigate)

    })
    .catch((err) => {
        alert(`Erro: ${err.response.data}`)
    })
}