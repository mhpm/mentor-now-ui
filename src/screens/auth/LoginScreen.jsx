import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Wrapper } from '../../components'
import logoImage from '../../../assets/logoW.png'
import { useDispatch } from 'react-redux'
import { facebookSignIn } from '../../redux/auth/authActions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Logo = styled(Image)`
  width: 200px;
  height: 50px;
  margin-bottom: 70px;
`

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const signIn = () => dispatch(facebookSignIn)
  //AsyncStorage.clear()

  return (
    <Container p={4}>
      <Wrapper>
        <Logo source={logoImage}></Logo>
        <Button fluid variant="blue" onPress={signIn}>
          Iniciar con Facebook
        </Button>
        <Button fluid onPress={() => navigation.navigate('SignIn')}>
          Iniciar con Email
        </Button>
        <Text fontFamily="light" mt={3} mb={5}>
          ¿Eres nuevo?{' '}
          <Text isLink onPress={() => navigation.navigate('SignUp')}>
            Registrate
          </Text>
        </Text>
        <Footer>
          <Text fontFamily="bold">MentorNow &reg; 2020</Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default LoginScreen
