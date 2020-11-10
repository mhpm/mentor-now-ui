import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Input, Wrapper } from '../../components'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const LoginScreen = ({ navigation }) => {
  return (
    <Container p={3}>
      <Wrapper>
        <Box p={2} width="100%">
          <Text fontFamily="black" fontSize="26px" mx="auto" mb={4}>
            Inicio de Sesión
          </Text>
        </Box>
        <Input placeholder="email" />
        <Input placeholder="password" mb={3} />
        <Button
          variant="primary"
          fluid
          onPress={() => navigation.navigate('Main')}
        >
          Iniciar Sesión
        </Button>
        <Text isLink mt={3} onPress={() => navigation.navigate('Recovery')}>
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

export default LoginScreen
