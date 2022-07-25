import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from '../../constants/constants';

const Matches = (props) => {

    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get(`${BASE_URL}/matches`)
        .then((res) => {
            setMatches(res.data.matches)
            console.log(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMatches()
    }, [])

    const newMatches = matches.map((person) => {
        return (
            <p key={person.id}>{person.name}</p>
        )
    })

    return (
        <div>
            <h3>Matches</h3>
            {newMatches}
        </div>
    )
}

export default Matches