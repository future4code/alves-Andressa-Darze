import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"

const Matches = (props) => {

    const [matches, setMatches] = useState([])

    const getMatches = (person) => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${person}/matches`)
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMatches("daniel")
    }, [])

    const newMatches = matches.map((person) => {
        return (
            <p key={person.name}>{person.name}</p>
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