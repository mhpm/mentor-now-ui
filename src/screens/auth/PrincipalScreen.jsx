import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Wrapper } from '../../components'
import logoImage from '../../../assets/logoW.png'

const Logo = styled(Image)`
  width: 200px;
  height: 50px;
  margin-bottom: 70px;
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
