import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Button, Container, Text, Box, Wrapper } from '../../components'
import logoImage from '../../../assets/logoW.png'
import { AppState, AsyncStorage } from 'react-native'
import * as Facebook from 'expo-facebook'

const Logo = styled(Image)`
  width: 200px;
  height: 50px;
  margin-bottom: 70px;
`

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
`

const PrincipalScreen = ({ navigation }) => {
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
  }, [])

  handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      console.log('avtive')
    }
  }

  const logInFacebook = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '1007474016423973',
      })
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      })
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        )
        const data = await response.json()
        console.log('Logged in!', data)
        await AsyncStorage.setItem('user', JSON.stringify(data))
        navigation.navigate('Main')
      } else {
        // type === 'cancel'
        console.log('login cancel')
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`)
    }
  }
  return (
    <Container p={4}>
      <Wrapper>
        <Logo source={logoImage}></Logo>
        <Button fluid variant="blue" onPress={logInFacebook}>
          Iniciar con Facebook
        </Button>
        <Button fluid onPress={() => navigation.navigate('Login')}>
          Iniciar con Email
        </Button>
        <Text fontFamily="light" mt={3} mb={5}>
          ¿Eres nuevo?{' '}
          <Text isLink onPress={() => navigation.navigate('Register')}>
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

export default PrincipalScreen
