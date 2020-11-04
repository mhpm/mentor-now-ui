import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { TouchableHighlight, View } from 'react-native'
import LightTheme from '../theme/LightTheme'

const { colors } = LightTheme

const BaseButton = styled(TouchableHighlight)`
  height: 60px;
  border-radius: 100px;
  margin: 5px;
`

const ButtonStyled = styled(View)`
  height: 60px;
  border-radius: 100px;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => (props.variant ? props.variant : colors.dark)};
  width: ${(props) => (props.fluid ? '100%' : '300px')};
`

const Button = (props) => {
  const { children, variant, fluid, ...rest } = props
  return (
    <BaseButton activeOpacity={0.6} {...rest}>
      <ButtonStyled
        activeOpacity={0.6}
        underlayColor="red"
        variant={colors[variant]}
        fluid={fluid}
      >
        <Text weight="bold">{children}</Text>
      </ButtonStyled>
    </BaseButton>
  )
}

export default Button
