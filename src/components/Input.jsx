import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import Box from './Box'
import Text from './Text'

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
`

const Input = ({ placeholder }) => {
  return (
    <Box width="100%" mb={2}>
      <StyledInput placeholderTextColor="gray" placeholder={placeholder} />
    </Box>
  )
}

export default Input
