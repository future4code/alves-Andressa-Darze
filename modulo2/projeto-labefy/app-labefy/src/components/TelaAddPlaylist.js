import React from "react"
import axios from "axios"

export default class TelaAddPlaylist extends React.Component {
    state = {
        nome: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    addPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                Authorization: "andressa-darze-alves"
            }
        })
        .then((res) => {
            alert("Playlist adicionada com sucesso!")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return (
            <div>
                <h2>TelaAddPlaylist</h2>
                <input 
                    placeholder="Nome da playlist"
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <button onClick={this.addPlaylist}>Adicionar Playlist</button>

                <button onClick={this.props.irParaListaPlaylists}>Lista de Playlists</button>
                 
            </div>
        )
    }
}
