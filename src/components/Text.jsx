import React from 'react'
import styled from 'styled-components'

const TextStyled = styled.Text`
  font-family: 'Roboto';
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
`

const Text = ({
  size = '18px',
  color = 'white',
  children,
  weight = '600',
  ...rest
}) => {
  return (
    <TextStyled size={size} color={color} weight={weight} {...rest}>
      {children}
    </TextStyled>
  )
}

export default Text
