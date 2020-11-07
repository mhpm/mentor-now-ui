import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box } from '../../components'
import logoImage from '../../../assets/logoW.png'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const RecoveryScreen = ({ navigation }) => {
  return (
    <Container style={{ padding: 20 }}>
      <Box p={2} width="100%">
        <Text mx="auto">Recuperar Contraseña</Text>
      </Box>
      <Footer>
        <Text fontFamily="bold" onPress={() => navigation.goBack()}>
          Cancelar
        </Text>
      </Footer>
    </Container>
  )
}

export default RecoveryScreen
