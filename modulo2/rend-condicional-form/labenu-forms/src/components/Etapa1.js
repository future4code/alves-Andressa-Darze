import React, { Component } from 'react'
import styled from 'styled-components'

export default class Etapa1 extends Component {
    render() {
        return (
            <div className="Etapa1">
                <div className='Form'>
                    <h1>ETAPA 1 - DADOS GERAIS</h1>
                    <label>1. Qual o seu nome?</label>
                    <br/>
                    <input></input>
                    <br/>
                    <label>2. Qual a sua idade?</label>
                    <br/>
                    <input></input>
                    <br/>
                    <label>3. Qual o seu email?</label>
                    <br/>
                    <input></input>
                    <br/>
                    <label>4. Qual a sua escolaridade?</label>
                    <br/>
                    <input></input>
                </div>
            </div>
        )
    }
}
