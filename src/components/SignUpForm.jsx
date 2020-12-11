import React from 'react'
import { useFormik } from 'formik'
import Button from './Button'
import Text from './Text'
import Box from './Box'
import Input from './Input'
import Wrapper from './Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../redux/auth/authActions'
import * as Yup from 'yup'

const SignUpForm = () => {
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo requerido'),
      email: Yup.string().email('Correo invalido').required('Campo requerido'),
      password: Yup.string().required('Campo requerido'),
      confirmPassword: Yup.string().required('Campo requerido'),
    }),
    onSubmit: (values) => handleSubmit(values),
  })

  const handleSubmit = ({ name, email, password, confirmPassword }) => {
    const form = new FormData()
    form.append('name', name)
    form.append('email', email.toLowerCase())
    form.append('password', password)
    form.append('confirmPassword', confirmPassword)

    dispatch(signIn(form))
  }

  return (
    <Wrapper loading={isLoading} mb="40%">
      <Box p={2}>
        <Text fontFamily="black" fontSize="26px" mx="auto" mb={1}>
          Crear Cuenta
        </Text>
      </Box>
      <Box mb={2}>
        <Text fontSize="14px" fontFamily="bold" color="error">
          {error}
        </Text>
      </Box>
      <Input
        bg="shade5"
        autoCompleteType="off"
        placeholder="Nombre"
        onChangeText={formik.handleChange('name')}
        value={formik.values.name}
        textHelper={
          formik.errors.name && formik.touched.name ? formik.errors.name : null
        }
      />
      <Input
        bg="shade5"
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
      <Input
        bg="shade5"
        type="password"
        placeholder="Contraseña"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        textHelper={
          formik.errors.password && formik.touched.password
            ? formik.errors.password
            : null
        }
      />
      <Input
        bg="shade5"
        type="password"
        placeholder="Confirmar Contraseña"
        onChangeText={formik.handleChange('confirmPassword')}
        value={formik.values.confirmPassword}
        textHelper={
          formik.errors.confirmPassword && formik.touched.confirmPassword
            ? formik.errors.confirmPassword
            : null
        }
      />
      <Button mt="3" variant="primary" fluid onPress={formik.handleSubmit}>
        Crear Cuenta
      </Button>
    </Wrapper>
  )
}

export default SignUpForm
