import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Wrapper } from '../../components'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const RegisterScreen = ({ navigation }) => {
  return (
    <Container p={4}>
      <Wrapper>
        <Box p={2} width="100%">
          <Text mx="auto">Crear Cuenta</Text>
        </Box>
        <Button fluid onPress={() => navigation.navigate('Main')}>
          Iniciar con Email
        </Button>
        <Footer>
          <Text fontFamily="bold" onPress={() => navigation.goBack()}>
            Cancelar
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default RegisterScreen
