import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box } from '../../components'
import logoImage from '../../../assets/logoW.png'

const Logo = styled(Image)`
  position: absolute;
  top: 150px;
  width: 200px;
  height: 50px;
`

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const Lines = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-top: 15px;
  margin-bottom: 15px;
`

const PrincipalScreen = ({ navigation }) => {
  return (
    <Container style={{ padding: 20 }}>
      <Logo source={logoImage}></Logo>
      <Button variant="blue" onPress={() => navigation.navigate('Main')}>
        Iniciar con Facebook
      </Button>
      <Button onPress={() => navigation.navigate('Login')}>
        Iniciar con Email
      </Button>
      <Text fontFamily="light" mt={2}>
        ¿Eres nuevo?{' '}
        <Text onPress={() => navigation.navigate('Register')}>Registrate</Text>
      </Text>
      <Footer>
        <Text fontFamily="bold">MentorNow &reg; 2020</Text>
      </Footer>
    </Container>
  )
}

export default PrincipalScreen
