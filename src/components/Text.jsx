import React from 'react'
import styled from 'styled-components'
import { Text as Txt } from 'react-native'
import theme from '../theme/LightTheme'

const TextStyled = styled(Txt)`
  font-family: 'Roboto';
  color: ${(props) => (props.primary ? theme.colors.primary : props.color)};
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
