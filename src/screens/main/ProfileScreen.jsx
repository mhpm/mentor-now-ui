import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { View, SafeAreaView, AsyncStorage } from 'react-native'
import Container from '../../components/Container'
import Text from '../../components/Text'
import { ProfileHeader } from '../../components'
import * as Facebook from 'expo-facebook'

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  margin-top: 0;
  padding-bottom: 90px;
`

const Body = styled(View)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #2c2c2c;
  margin-top: 150px;
`

const Footer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 110px;
  width: 100%;
`

const ProfileScreen = ({ navigation, route }) => {
  const [user, setUser] = useState({})

  const getUser = async () => {
    let info = await AsyncStorage.getItem('user')
    info = await JSON.parse(info)
    const { id, name, picture } = info
    const { data } = picture
    setUser({ id: id, name: name, picture: data.url })
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleLogOut = () => {
    Facebook.logOutAsync()
    navigation.navigate('Principal')
    AsyncStorage.clear()
  }

  return (
    <Container>
      <Wrapper>
        <ProfileHeader name={user.name} picture={user.picture} />
        <Footer>
          <Text fontFamily="bold" onPress={handleLogOut}>
            Cerrar Sesión
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ProfileScreen
