import React from 'react'
import {useState, useEffect} from "react"

const Header = (props) => {

  const selectButton = () => {
    switch (props.currentScreen) {
        case "home":
            return <button onClick={props.goToMatches}>Ver Matches</button>
        case "matches":
            return <button onClick={props.goToHome}>Ir para home</button>
    }
  }

  return (
    <div>
        <h3>Header</h3>
        {selectButton()}
        
    </div>
  )
}

export default Header