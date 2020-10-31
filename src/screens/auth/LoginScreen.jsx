import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Text from '../../components/Text'
import logoImage from '../../../assets/logoW.png'

const Logo = styled.Image`
  position: absolute;
  top: 180px;
  width: 200px;
  height: 50px;
`

const Footer = styled.View`
  position: absolute;
  bottom: 30px;
`

const LoginScreen = ({ navigation }) => {
  return (
    <Container style={{ padding: 20 }}>
      <Logo source={logoImage}></Logo>
      <Button blue onPress={() => navigation.push('Main')}>
        Iniciar con Facebook
      </Button>
      <Button onPress={() => navigation.push('Main')}>Iniciar con Email</Button>
      <Text weight="bold" style={{ marginTop: 20 }}>
        ¿Eres nuevo? Registrate
      </Text>
      <Footer>
        <Text weight="bold">MentorNow &reg; 2020</Text>
      </Footer>
    </Container>
  )
}

export default LoginScreen
