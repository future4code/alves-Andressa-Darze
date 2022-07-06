import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components";

const CardProfile = styled.div`
    border-width: 1px;
    .img{
        width: 10px;
    }
    
`

const Home = (props) => {

    const [profile, setProfile] = useState({})

    const getProfile = (person) => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${person}/person`)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const choosePerson = (person) => {
        const body = {
            "id": "71gMbZs2txS9LDvGK5Ew",
            "choice": true
        }

        const headers = {
            "Content-Type": "application/json"
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${person}/choose-person`,body, headers)
        .then((res) => {
            if(res.data.isMatch === true){
                alert("Deu match! <3")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const resetMatches = (person) => {
        const headers = {
            "Content-Type": "application/json"
        }

        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${person}/clear`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProfile("darvas")
    }, [])
    

    console.log(profile) // PARA CHECAR

    const displayProfile = () => {
        return <div>
            <h4>{profile.name}, {profile.age}</h4>
            <p>{profile.bio}</p>
            <img src={profile.photo} alt={profile.photo_alt} />
            
        </div>
    }

    return (
        <div>
            <h3>Home</h3>
            <button onClick={() => choosePerson("darvas") }>Like</button>
            <button onClick={() => getProfile("darvas")}>Dislike</button>
            <button onClick={() => getProfile("darvas")}>Outro Perfil</button>
            <button onClick={() => resetMatches("darvas")}>Resetar perfis</button>
            <CardProfile>
                {displayProfile()}
            </CardProfile>
            
        </div>
    )
}

export default Home