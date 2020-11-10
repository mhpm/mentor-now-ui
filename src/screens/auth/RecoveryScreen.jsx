import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Wrapper } from '../../components'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const RecoveryScreen = ({ navigation }) => {
  return (
    <Container p={3}>
      <Wrapper>
        <Box p={2} width="100%">
          <Text mx="auto">Recuperar Contraseña</Text>
        </Box>
        <Footer>
          <Text fontFamily="bold" onPress={() => navigation.goBack()}>
            Cancelar
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default RecoveryScreen
