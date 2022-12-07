import React from "react"
import axios from "axios"
import styled from "styled-components"
import TelaDetalhesPlaylist from "./TelaDetalhesPlaylist"

const CardPlaylists = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 350px;
  display: flex;
  justify-content: space-between;
`

export default class TelaListaPlaylists extends React.Component {
  state = {
    lista: []
  }

  componentDidMount() {
    this.pegarPlaylists()
  }


  pegarPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
        Authorization: "andressa-darze-alves"
      }
    })
      .then((res) => {
        this.setState({lista: res.data.result.list}) //Só assim para a função map() funcionar, pois antes era um objeto, só a list é um array
      })
      .catch((err) => {
        console.log(err)
      })
  }

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios.delete(url, {
      headers: {
        Authorization: "andressa-darze-alves"
      }
    })
    .then((res) => {
      alert("Playlist deletada com sucesso!")
      this.pegarPlaylists()
    })
    .catch((err) => {
      alert("Ocorreu algum erro")
    })
  }

  render() {
    const pegarPlaylists = this.state.lista.map((playlist) => {
      return (
        <CardPlaylists key={playlist.id}>

          {playlist.name}
          <button onClick={() => this.props.irParaDetalhesPlaylist(playlist.id)}>Detalhes</button>
          <button onClick={() => this.deletarPlaylist(playlist.id)}>Excluir</button>
          
        </CardPlaylists>
      )
    })

    return (
      <div>
        {pegarPlaylists}
        <button onClick={this.props.irParaAddPlaylist}>Voltar</button>
      </div>
    )
  }
}
