import React, { useState } from 'react'
import { useFormik } from 'formik'
import { View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Input, Wrapper } from '../../components'
import { isValidEmail } from '../../lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../redux/auth/authActions'

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => handleSubmit(values),
  })

  const [msg, setMsg] = useState(null)

  const validForm = (email, password) => {
    let isValid = true

    if (!email || !password) {
      setMsg('Ingresa tus credenciales')
      isValid = false
    } else {
      isValid = isValidEmail(email)
      if (!isValid) setMsg('Email invalido')
    }

    return isValid
  }

  const handleSubmit = ({ email, password }) => {
    if (!validForm(email, password)) return
    setMsg(null)

    const form = new FormData()
    form.append('email', email.toLowerCase())
    form.append('password', password)

    dispatch(signIn(form))
  }

  return (
    <Container p={3}>
      <Wrapper loading={isLoading}>
        <Box p={2} width="100%">
          <Text fontFamily="black" fontSize="26px" mx="auto" mb={4}>
            Inicio de Sesión
          </Text>
        </Box>
        <Box mb={3}>
          <Text fontSize="14px" color="error">
            {msg || error}
          </Text>
        </Box>
        <Input
          autoCompleteType="off"
          value={formik.values.email}
          placeholder="Email"
          onChangeText={formik.handleChange('email')}
        />
        <Input
          type="password"
          value={formik.values.password}
          placeholder="Password"
          onChangeText={formik.handleChange('password')}
          mb={3}
        />
        <Button variant="primary" fluid onPress={formik.handleSubmit}>
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

export default SignInScreen
