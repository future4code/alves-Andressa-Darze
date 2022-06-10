import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import minhafoto from './img/minha-foto.png'
import seta from './img/arrow-down-icon.png'
import uc from './img/uc-logo.png'
import email from './img/email-icon.png'
import location from './img/location-icon.png'

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

const  AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  div className="page-section-container"{
    width: 40vw;
    margin: 10px 0;
  }

  h3{
    text-align: center;
    margin-bottom: 20px;
  }

  h2{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhafoto}
          nome="Andressa Darzé" 
          descricao="Oi, eu sou Andressa! Tenho 25 anos, sou uma dev fullstack em desenvolvimento e futura atleta de vôlei de praia e quadra! "
        />
        
        <ImagemButton 
          imagem={seta} 
          texto="Ver mais"
        />
      </div>

      <div className="smallcard-container">
        <CardPequeno
          imagem={email}
          titulo="Email: "
          texto="andressa.darze@gmail.com" />
      </div>

      <div className="smallcard-container">
        <CardPequeno
          imagem={location}
          titulo="Endereço: "
          texto=" Salvador-BA" />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante do melhor curso formador de desenvolvedores de software!" 
        />
        
        <CardGrande 
          imagem={uc} 
          nome="Universidade de Coimbra" 
          descricao="Licenciada em Engenharia Biomédica pela Universidade de Coimbra, Portugal" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </AppContainer>
  );
}

export default App;
