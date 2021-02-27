import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { Button, Container, Text, Box, Wrapper, Input } from '../../components'

const RecoveryScreen = () => {
  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo invalido').required('Campo requerido'),
    }),
    onSubmit: (values) => handleSubmit(values),
  })

  const handleSubmit = ({ email }) => {
    const form = new FormData()
    form.append('email', email.toLowerCase())
  }

  return (
    <Container p={3} icon>
      <Wrapper>
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
