import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { TouchableOpacity } from 'react-native'

const ButtonStyled = styled(TouchableOpacity)`
  align-items: center;
  height: 60px;
  border-radius: 100px;
  padding: 15px;
  margin-top: 10px;
  background-color: ${(props) => (props.blue ? '#3b5998  ' : '#2c2c2c')};
  width: ${(props) => (props.fluid ? '100%' : '300px')};
`

const Button = (props) => {
  const { children, fluid, ...rest } = props
  return (
    <ButtonStyled fluid={fluid} {...rest}>
      <Text weight="bold">{children}</Text>
    </ButtonStyled>
  )
}

export default Button
