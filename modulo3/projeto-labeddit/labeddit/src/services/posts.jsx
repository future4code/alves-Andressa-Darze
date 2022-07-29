import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createPost = (body, clear) => {
    const headers = {
        Authorization: localStorage.getItem('token')
    }
    axios.post(`${BASE_URL}/posts`, body, {headers})
    .then((res) => {
        alert(res.data)
        clear()
    })
    .catch((err) => {
        console.log(err)
    })
}

export const createPostVote = (id, vote) => {
    const body = {
        direction: Number(vote)
    }
    const headers = {
        Authorization: localStorage.getItem('token') 
    }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {headers})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const changePostVote = (id, vote) => {
    const body = {
        direction: Number(vote)
    }
    const headers = {
        Authorization: localStorage.getItem('token') 
    }
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {headers})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

