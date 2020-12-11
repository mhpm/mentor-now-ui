import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Container, Text, Box, Wrapper, SignInForm } from '../../components'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const SignInScreen = ({ navigation }) => {
  return (
    <Container p={3}>
      <Wrapper>
        <SignInForm />
        <Text
          mb={'100px'}
          isLink
          mt={3}
          onPress={() => navigation.navigate('Recovery')}
        >
          ¿Olvidaste tu contraseña?
        </Text>
        <Footer>
          <Text fontFamily="bold" onPress={() => navigation.goBack()}>
            Cancelar
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default SignInScreen
