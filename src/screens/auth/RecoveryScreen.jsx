import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../redux/auth/authActions'
import { Button, Container, Text, Box, Wrapper, Input } from '../../components'

const RecoveryScreen = () => {
  const [message, setMessage] = useState(null)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo invalido').required('Campo requerido'),
    }),
    onSubmit: (values) => handleSubmit(values),
  })

  const handleSubmit = async ({ email }) => {
    const form = new FormData()
    form.append('email', email.toLowerCase())
    await dispatch(resetPassword(form))

    if (!error) setMessage('Correo de recuperación enviado correctamente')
  }

  return (
    <Container p={3} icon>
      <Wrapper loading={isLoading}>
        <Box>
          <Box mb={3}>
            <Text fontSize="14px" fontFamily="bold" color="error">
              {error || message}
            </Text>
          </Box>
        </Box>
        <Input
          bg="shade5"
          label="Emial:"
          autoCompleteType="off"
          placeholder="Email"
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          textHelper={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
        />
        <Button mt="3" variant="primary" fluid onPress={formik.handleSubmit}>
          Recuperar Contraseña
        </Button>
      </Wrapper>
    </Container>
  )
}

export default RecoveryScreen
