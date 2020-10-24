import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import logoImage from '../../../assets/logoW.png'

const Logo = styled.Image`
  position: absolute;
  top: 180px;
  width: 200px;
  height: 50px;
`

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const SubText = styled(Text)`
  margin-top: 20px;
`

const Footer = styled.View`
  position: absolute;
  bottom: 30px;
`

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Logo source={logoImage}></Logo>
      <Button blue onPress={() => navigation.push('Main')}>
        <Text>Iniciar con Facebook</Text>
      </Button>
      <Button>
        <Text>Iniciar con Email</Text>
      </Button>
      <SubText>¿Eres nuevo? Registrate</SubText>
      <Footer>
        <Text>MentorNow &reg; 2020</Text>
      </Footer>
    </Container>
  )
}

export default LoginScreen
