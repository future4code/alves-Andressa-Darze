import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardMusicas = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 400px;
  display: flex;
  justify-content: space-between;
`

export default class TelaDetalhesPlaylist extends React.Component {
  state = {
    listaMusicas: [],
    nome: "",
    artista: "",
    link: ""
  }

  handleNome = (event) => {
    this.setState({nome: event.target.value})
  }

  handleArtista = (event) => {
    this.setState({artista: event.target.value})
  }

  handleLink = (event) => {
    this.setState({link: event.target.value})
  }

  componentDidMount() {
    this.pegarMusicas(this.props.playlistId)
  }

  // PEGAR LISTA DE MÚSICAS DA PLAYLIST
  pegarMusicas = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

    axios.get(url, {
      headers: {
          Authorization: "andressa-darze-alves"
      }
    })
    .then((res) => {
        this.setState({listaMusicas: res.data.result.tracks})
    })
    .catch((err) => {
        console.log(err)
    })
  }

  // ADICIONAR MÚSICA À PLAYLIST
  addMusica = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

    const body = {
      name: this.state.nome,
      artist: this.state.artista,
      url: this.state.link
    }

    axios.post(url, body, {
      headers: {
        Authorization: "andressa-darze-alves"
      }
    })
    .then((res) => {
     alert("Música adicionada com sucesso!")
     this.pegarMusicas(this.props.playlistId)
     this.setState({nome:"", artista:"", link:""})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  deletarMusica = (playlistId, trackId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`

    axios.delete(url, {
      headers: {
        Authorization: "andressa-darze-alves"
      }
    })
    .then((res) => {
      alert("Música deletada com sucesso")
      this.pegarMusicas(this.props.playlistId)
    })
    .catch((err) => {
      console.log(err)
    })

  }

  render() {
    
    const pegarMusicas = this.state.listaMusicas.map((musica) => {
      return (
        <CardMusicas key={musica.id}>
          {musica.name}
          <button>Play</button>
          <button>Pause</button>
          <button onClick={() => this.deletarMusica(this.props.playlistId, musica.id)}>Excluir</button>
        </CardMusicas>
      )
    })

    return (
      <div>

        {pegarMusicas}

        <h3>Adicionar música</h3>
        <input
          placeholder="Nome da música" 
          value={this.state.nome}
          onChange={this.handleNome}
        />
        <br/>
        <input
          placeholder="Artista" 
          value={this.state.artista}
          onChange={this.handleArtista}
        />
        <br/>
        <input
          placeholder="Link" 
          value={this.state.link}
          onChange={this.handleLink}
        />
        <br/>
        <button onClick={() => this.addMusica(this.props.playlistId)}>Adicionar</button>
        <br/>
        <button onClick={this.props.irParaListaPlaylists}>Voltar para as playlists</button>
      </div>
    )
  }
}
