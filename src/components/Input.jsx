import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import { FontAwesome5 } from '@expo/vector-icons'
import Box from './Box'
import { space, color, fontSize, fontFamily } from 'styled-system'

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

const StyledInput = styled(TextInput)`
  padding-left: 17px;
  padding-right: 17px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-radius: 50px;
  background-color: #2c2c2c;
  color: gray;
  font-size: 17px;
  min-height: 60px;
  width: 100%;
  font-family: 'Roboto_700Bold';
  ${space}
  ${color}
  ${fontSize}
  ${fontFamily}
`

const Icon = styled(FontAwesome5)`
  position: absolute;
  right: 25px;
  top: 18px;
  z-index: 9;
  color: #575757;
  height: 100%;
  width: 30px;
`

const Input = (props) => {
  const [toggle, setToggle] = useState(true)

  const getPassIcon = () => (
    <Icon
      name={toggle ? 'eye-slash' : 'eye'}
      onPress={() => setToggle(!toggle)}
      size={24}
    />
  )

  const getIcon = () => <Icon name={props.icon} size={24} />

  return (
    <Box width="100%" mb={2}>
      {props.type === 'password' && getPassIcon()}
      {props.type !== 'password' && props.icon && getIcon()}
      <StyledInput
        secureTextEntry={props.type === 'password' && toggle}
        placeholderTextColor="gray"
        {...props}
      />
    </Box>
  )
}

export default React.memo(Input)
