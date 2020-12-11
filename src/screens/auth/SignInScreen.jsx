import React, { useEffect } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Container, Text, Wrapper, SignInForm } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const SignInScreen = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.clear()
  }, [])
  return (
    <Container bg="dark" p={3}>
      <Wrapper>
        <SignInForm />
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
