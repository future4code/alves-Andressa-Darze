import React, { useContext } from 'react'
import {HeaderStyle} from './styled'
import { useNavigate } from 'react-router-dom'
import {goToLoginPage} from '../../routes/Coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'

const Header = () => {

  const {states, setters} = useContext(GlobalStateContext)

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if(token) {
      logout()
      setters.setRightButtonText("Login")
      goToLoginPage(navigate)
    }else {
      goToLoginPage(navigate)
    }
  }

  return (
    <HeaderStyle>
      <h1>LabEddit</h1>
      <button onClick={rightButtonAction}>{states.rightButtonText}</button>
    </HeaderStyle>
  )
}

export default Header