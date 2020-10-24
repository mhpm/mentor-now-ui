import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.TouchableOpacity`
  align-items: center;
  width: 45%;
  height: 60px;
  border-radius: 100px;
  padding: 15px;
  margin-top: 10px;
  background-color: ${(props) => (props.blue ? '#3b5998  ' : '#2c2c2c')};
  width: 300px;
`

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const Button = (props) => {
  const { children, ...rest } = props
  return (
    <ButtonStyled {...rest}>
      <Text>{children}</Text>
    </ButtonStyled>
  )
}

export default Button
