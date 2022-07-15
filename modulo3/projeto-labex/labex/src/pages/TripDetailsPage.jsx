import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { goBack } from '../routes/Coordinator'
import { useProtectedPage } from '../constants/constants'
import axios from 'axios'
import { BASE_URL } from '../constants/constants'
import styled from 'styled-components'

const CardCandidates = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
`

export const TripDetailsPage = () => {

  const [tripDetails, setTripDetails] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approved, setApproved] = useState([])
  
  useProtectedPage()
  const navigate = useNavigate()
  const params = useParams()
  const token = localStorage.getItem('token')

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/trip/${params.id}`, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      setCandidates(res.data.trip.candidates)
      setApproved(res.data.trip.approved)
      setTripDetails(res.data.trip)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  , [])

  console.log(candidates)
  console.log(approved)

  // LISTA DE CANDIDATOS -- faltam os botões de aprovar ou não!
  const candidatesList = candidates.map((candidate) => {
    return (
      <CardCandidates key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>Idade: {candidate.age}</p>
        <p>Profissão: {candidate.profession}</p>
        <p>Texto de Candidatura: {candidate.applicationText}</p>
        <button onClick={() => decideCandidate(candidate.id, true, candidate.name)}>Aprovar</button>
        <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
      </CardCandidates>
    )
  })

  // PEGAR LISTA DE APROVADOS -- AINDA NÃO DEU CERTO!
  const approvedList = (approved === null ? <p>Não há candidatos aprovados</p> : approved.map((approved) => {
    return (
      <p>{approved.name}</p>
    )
  }))

  // TÁ DANDO ERRO E AINDA FALTA UM JEITO DE ACRESCENTAR OS APROVADOS AO ARRAY APPROVED
  const decideCandidate = (candidateId, approved, candidateName) => {
    const headers = {
        'Content-Type': 'application/json',
        'auth': token
    }
    const body = {
        approve: approved
    }
    axios.put(`${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`, body, headers)
    .then((res) => {
        console.log(res)
        setApproved([...approved, candidateName ]) // conferir se tá certo (falta a o PUT não dar erro)
    })
    .catch((err) => {
        console.log(err)
    })
}

  return (
    <div>
      <h2>TripDetailsPage</h2>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <h3>{tripDetails.name}</h3>
      <p>{tripDetails.description}</p>
      <p><strong>Planeta: </strong> {tripDetails.planet}</p>
      <p><strong>Duração </strong> {tripDetails.durationInDays} dias</p>
      <p><strong>Data: </strong> {tripDetails.date}</p>

      <h3>Candidatos Pendentes</h3>
      {candidatesList}

      <h3>Candidatos Aprovados</h3>
      {approvedList}
    </div>
  )
}
