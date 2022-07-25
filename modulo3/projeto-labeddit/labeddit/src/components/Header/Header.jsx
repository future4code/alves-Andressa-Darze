import React from 'react'
import {HeaderStyle} from './styled'
import { useNavigate } from 'react-router-dom'
import {goToLoginPage} from '../../routes/Coordinator'

const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderStyle>
      <h1>LabEddit</h1>
      <button onClick={() => goToLoginPage(navigate)}>Login</button>
    </HeaderStyle>
  )
}

export default Header