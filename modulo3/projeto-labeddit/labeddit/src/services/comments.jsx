import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createCommentVote = (id, vote) => {
    const body = {
        direction: vote
    }
    const headers = {
        Authorization: localStorage.getItem('token') 
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {headers})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const changeCommentVote = (id, vote) => {
    const body = {
        direction: vote
    }
    const headers = {
        Authorization: localStorage.getItem('token') 
    }
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}