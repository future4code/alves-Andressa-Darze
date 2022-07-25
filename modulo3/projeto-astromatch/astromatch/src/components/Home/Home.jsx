import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components";
import { BASE_URL } from '../../constants/constants';

const CardProfile = styled.div`
    .img{
        width: 10px;
    }
    
`

const Home = (props) => {

    const [profile, setProfile] = useState({})

    const getProfile = () => {
        axios.get(`${BASE_URL}/person`)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const choosePerson = (id, choice) => {
        const body = {
            id: id,
            choice: choice
        }

        const headers = {
            "Content-Type": "application/json"
        }
        axios.post(`${BASE_URL}/choose-person`,body, headers)
        .then((res) => {
            if(res.data.isMatch === true) {
                alert("Deu match <3 !")
            }
            getProfile()
           
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const resetMatches = () => {
        const headers = {
            "Content-Type": "application/json"
        }

        axios.put(`${BASE_URL}/clear`, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProfile()
    }, [])


    const displayProfile = () => {
        return <div>
            <h4>{profile.name}, {profile.age}</h4>
            <p>{profile.bio}</p>
            <img src={profile.photo} alt={profile.photo_alt} />
        </div>
    }

    return (
        <div>
            {profile ? 
            (<div>
                <h3>Home</h3>
                <button onClick={() => choosePerson(profile.id, true) }>Like</button>
                <button onClick={() => choosePerson(profile.id, false) }>Dislike</button>
                <CardProfile>
                    {displayProfile()}
                </CardProfile>
            </div>) : ( <button onClick={() => resetMatches()}>Resetar perfis</button>) }
            
        </div>
    )
}

export default Home