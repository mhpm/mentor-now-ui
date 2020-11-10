import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { TouchableHighlight, View } from 'react-native'
import LightTheme from '../theme/LightTheme'
import { space } from 'styled-system'

const { colors } = LightTheme

const BaseButton = styled(TouchableHighlight)`
  height: 60px;
  border-radius: 100px;
  margin: 5px;
  width: ${(props) => (props.fluid ? '100%' : '300px')};
  ${space}
`

const ButtonStyled = styled(View)`
  height: 60px;
  border-radius: 100px;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => (props.variant ? props.variant : colors.dark)};
  width: 100%;
`

const Button = (props) => {
  const { children, variant, fluid, ...rest } = props
  return (
    <BaseButton fluid={fluid} activeOpacity={0.6} {...rest}>
      <ButtonStyled variant={colors[variant]}>
        <Text fontSize="17px" fontFamily="bold">
          {children}
        </Text>
      </ButtonStyled>
    </BaseButton>
  )
}

export default Button
