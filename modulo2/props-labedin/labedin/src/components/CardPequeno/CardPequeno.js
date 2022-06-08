import React from 'react';
import styled from 'styled-components'

const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    height: 35px;
    width: 300px;

    img{
        margin-left: 5px;
    }

    h4{
        margin: 0 5px 0 5px;
    }
`

function CardPequeno(props) {
    return (
        <SmallContainer>
            <img src={ props.imagem }/>
            <h4>{ props.titulo }</h4>
            <p>{ props.texto }</p>
        </SmallContainer>

    )
}

export default CardPequeno;