import React, { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Input, Wrapper } from '../../components'
import { isValidEmail } from '../../lib/utils'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const SignUpScreen = ({ navigation }) => {
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  const handleChangeText = (name, value) => {
    setInfo({ ...info, [name]: value })
  }

  const validForm = () => {
    let isValid = true

    if (!info.email || !info.password) {
      setMsg('Ingresa tus credenciales')
      isValid = false
    } else {
      isValid = isValidEmail(info.email)
      if (!isValid) setMsg('Email invalido')
    }

    return isValid
  }

  const handleSubmit = () => {
    if (!validForm()) return

    const form = new FormData()
    form.append('email', info.email.toLowerCase())
    form.append('password', info.password)

    setLoading(true)
    fetch('http://45.55.110.117/mentornow-api/api/public/users/login', {
      method: 'POST',
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.token) {
          navigation.navigate('Main')
          return
        }
        setMsg(data.message)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error: ', error)
        setMsg(
          'Parece que hubo un error inesperado, intenta iniciar mas tarde.'
        )
        setLoading(false)
      })
  }

  return (
    <Container p={3}>
      <Wrapper loading={loading}>
        <Box p={2} width="100%">
          <Text fontFamily="black" fontSize="26px" mx="auto" mb={4}>
            Crear Cuenta
          </Text>
        </Box>
        <Box mb={3}>
          <Text fontSize="14px" color="error">
            {msg}
          </Text>
        </Box>
        <Input
          value={info.email}
          placeholder="Email"
          onChangeText={(value) => handleChangeText('email', value)}
        />
        <Input
          type="password"
          value={info.password}
          placeholder="Password"
          onChangeText={(value) => handleChangeText('password', value)}
          mb={3}
        />
        <Button variant="primary" fluid onPress={handleSubmit}>
          Iniciar Sesión
        </Button>
        <Text
          mb={'100px'}
          isLink
          mt={3}
          onPress={() => navigation.navigate('Recovery')}
        >
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

export default SignUpScreen
