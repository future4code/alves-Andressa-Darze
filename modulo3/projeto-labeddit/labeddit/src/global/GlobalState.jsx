import React, { useState } from 'react'
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    
    const token = localStorage.getItem('token')

    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    const [postInfo, setPostInfo] = useState({
      title:"",
      body: "",
      username: "",
      commentCount: 0,
      voteSum: 0
    })
    console.log(postInfo)
    const states = {rightButtonText, postInfo}
    const setters = {setRightButtonText, setPostInfo}

  return (
    <GlobalStateContext.Provider value={{states, setters}}>
        {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState