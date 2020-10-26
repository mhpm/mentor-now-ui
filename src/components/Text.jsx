import React from 'react'
import styled, { css } from 'styled-components'

const TextStyled = styled.Text`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
`

const Text = ({
  size = '18px',
  color = 'white',
  children,
  weight = 'bold',
  ...rest
}) => {
  return (
    <TextStyled size={size} color={color} weight={weight} {...rest}>
      {children}
    </TextStyled>
  )
}

export default Text
