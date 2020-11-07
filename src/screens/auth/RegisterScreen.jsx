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

const RegisterScreen = ({ navigation }) => {
  return (
    <Container style={{ padding: 20 }}>
      <Box p={2} width="100%">
        <Text mx="auto">Crear Cuenta</Text>
      </Box>
      <Button onPress={() => navigation.navigate('Main')}>
        Iniciar con Email
      </Button>
      <Footer>
        <Text fontFamily="bold" onPress={() => navigation.goBack()}>
          Cancelar
        </Text>
      </Footer>
    </Container>
  )
}

export default RegisterScreen
