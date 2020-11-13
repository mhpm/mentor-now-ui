import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Wrapper } from '../../components'
import logoImage from '../../../assets/logoW.png'
import { AppState } from 'react-native'

const Logo = styled(Image)`
  width: 200px;
  height: 50px;
  margin-bottom: 70px;
`

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const PrincipalScreen = ({ navigation }) => {
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
  }, [])

  handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      console.log('avtive')
    }
  }
  return (
    <Container p={4}>
      <Wrapper>
        <Logo source={logoImage}></Logo>
        <Button
          fluid
          variant="blue"
          onPress={() => navigation.navigate('Main')}
        >
          Iniciar con Facebook
        </Button>
        <Button fluid onPress={() => navigation.navigate('Login')}>
          Iniciar con Email
        </Button>
        <Text fontFamily="light" mt={3} mb={5}>
          ¿Eres nuevo?{' '}
          <Text isLink onPress={() => navigation.navigate('Register')}>
            Registrate
          </Text>
        </Text>
        <Footer>
          <Text fontFamily="bold">MentorNow &reg; 2020</Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default PrincipalScreen
