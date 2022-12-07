import React from "react";
import TelaAddPlaylist from "./components/TelaAddPlaylist";
import TelaDetalhesPlaylist from "./components/TelaDetalhesPlaylist";
import TelaListaPlaylists from "./components/TelaListaPlaylists";
// import styled from "styled-components";

export default class App extends React.Component {
  state = {
    telaAtual: "addPlaylist",
    clickedPlaylistId: ""
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "addPlaylist":
        return <TelaAddPlaylist irParaListaPlaylists={this.irParaListaPlaylists} />
      case "listaPlaylists":
        return <TelaListaPlaylists irParaDetalhesPlaylist={this.irParaDetalhesPlaylist} irParaAddPlaylist={this.irParaAddPlaylist}/>
      case "detalhesPlaylist":
        return <TelaDetalhesPlaylist irParaListaPlaylists={this.irParaListaPlaylists} playlistId={this.state.clickedPlaylistId}/>
      default:
        return <div>Erro! Página não encontrada!</div>
    }
  }

  irParaAddPlaylist = () => {
    this.setState({telaAtual: "addPlaylist"})
  }

  irParaListaPlaylists = () => {
    this.setState({telaAtual: "listaPlaylists", clickedPlaylistId: ""})
  }

  irParaDetalhesPlaylist = (playlistId) => {
    this.setState({telaAtual: "detalhesPlaylist", clickedPlaylistId: playlistId})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }
}
