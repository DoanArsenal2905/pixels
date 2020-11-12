import React from 'react'
import { func, string } from 'prop-types'

import styled from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'

const Button = styled.button`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 25px;
  margin-left: 15px;
  z-index: 1000;
  cursor: pointer;
  border: 0px;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.6;
  left: 10px;
  background-color: #f76a8c;

  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`
const Sun = styled(FiSun)`
  color: #ffffff;
  font-size: 25px;
  background: #f76a8c;
`
const Moon = styled(FiMoon)`
  color: #ffffff;
  font-size: 25px;
  background: #f76a8c; 
`

const TogglerMode = ({ theme, toggleTheme }) => {
  const btnSwitch = theme === 'light' ? <Moon /> : <Sun />

  return (
    <Button style={{ background: '#f76a8c' }} onClick={toggleTheme}>
      {btnSwitch}
    </Button>
  )
}

TogglerMode.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default TogglerMode