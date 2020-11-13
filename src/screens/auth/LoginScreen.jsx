import React, { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Input, Wrapper } from '../../components'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const LoginScreen = ({ navigation }) => {
  const [info, setInfo] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  const handleChangeText = (name, value) => {
    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data?.error) setMsg(data?.error)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error: ', error)
        setMsg(error.message)
        setLoading(false)
      })
  }

  return (
    <Container p={3}>
      <Wrapper loading={loading}>
        <Box p={2} width="100%">
          <Text fontFamily="black" fontSize="26px" mx="auto" mb={4}>
            Inicio de Sesión
          </Text>
        </Box>
        <Box mb={3}>
          <Text color="error">{msg}</Text>
        </Box>
        <Input
          value={info.email}
          placeholder="email"
          onChangeText={(value) => handleChangeText('email', value)}
        />
        <Input
          value={info.password}
          secureTextEntry={true}
          fontSize="30px"
          fontFamily="black"
          placeholder="password"
          onChangeText={(value) => handleChangeText('password', value)}
          mb={3}
        />
        <Button variant="primary" fluid onPress={handleSubmit}>
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
