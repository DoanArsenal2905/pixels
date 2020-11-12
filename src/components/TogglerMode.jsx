import React from 'react'
import { func, string } from 'prop-types'

import styled from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

const Button = styled.button`
  position: fixed;
  width: 35px;
  height: 35px;
  bottom: 10px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  border: 0.3px solid #333333;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.6;
  left: 10px;
  &:focus {
    outline: none;
  }
`
const Sun = styled(FiSun)`
  color: #333333;
  background: #ffffff;
`
const Moon = styled(FiMoon)`
  color: #333333;
  background: #ffffff; 
`

const TogglerMode = ({ theme, toggleTheme }) => {
  const btnSwitch = theme === 'light' ? <Moon /> : <Sun />

  return (
    <Button style={{ background: '#ffffff' }} onClick={toggleTheme}>
      {btnSwitch}
    </Button>
  )
}

TogglerMode.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default TogglerMode