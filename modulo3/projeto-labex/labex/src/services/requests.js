import axios from "axios"
import { BASE_URL } from "../constants/constants"


export const getTrips = () => { 
    axios.get(`${BASE_URL}/trips`)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const getTripDetails = (id, token) => {
    const headers = {
        "auth": token
    }
    axios.get(`${BASE_URL}/trip/${id}`, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const createTrip = () => {
    const headers = {
        "Content-Type": "application/json",
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
    }
    const body = {
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: 0
    }

    axios.post(`${BASE_URL}/trips`, body, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const applyToTrip = (id) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const body = {
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: ""
    }

    axios.post(`${BASE_URL}/trips/${id}/apply`, body, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const deleteTrip = (id) => {
    const headers = {
        "Content-Type": "application/json",
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k"
    }

    axios.delete(`${BASE_URL}/trips/${id}`, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const logIn = () => {
    const headers = {
        "Content-Type": "application/json"
    }

    const body = {
        email: "",
        password: ""
    }

    axios.post(`${BASE_URL}/login`, body, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const decideCandidate = (tripId, candidateId, approved) => {
    const headers = {
        "Content-Type": "application/json",
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs"
    }

    const body = {
        approve: approved
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, headers)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}


// FALTA PASSAR PARÂMETRO saveData -> Rever aula da Chijo!!