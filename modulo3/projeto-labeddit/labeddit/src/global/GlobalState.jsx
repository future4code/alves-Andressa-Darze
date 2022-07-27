import React, { useState } from 'react'
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    
    const token = localStorage.getItem('token')

    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    const states = {rightButtonText}
    const setters = {setRightButtonText}

  return (
    <GlobalStateContext.Provider value={{states, setters}}>
        {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState