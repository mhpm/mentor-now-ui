import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, SearchBar } from '../../components'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const LoginScreen = ({ navigation }) => {
  return (
    <Container style={{ padding: 20 }}>
      <Box p={2} width="100%">
        <Text fontFamily="black" fontSize="26px" mx="auto">
          Inicio de Sesión
        </Text>
      </Box>
      <SearchBar />
      <SearchBar />
      <Button fluid onPress={() => navigation.navigate('Main')}>
        Iniciar Sesión
      </Button>
      <Text fontFamily="light" mt={2}>
        <Text onPress={() => navigation.navigate('Recovery')}>
          ¿Olvidaste tu contraseña?
        </Text>
      </Text>
      <Footer>
        <Text fontFamily="bold" onPress={() => navigation.goBack()}>
          Cancelar
        </Text>
      </Footer>
    </Container>
  )
}

export default LoginScreen
