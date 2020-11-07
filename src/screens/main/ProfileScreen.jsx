import React, { useEffect } from 'react'
import styled from 'styled-components'
import { View, SafeAreaView } from 'react-native'
import Container from '../../components/Container'
import Text from '../../components/Text'
import { ProfileHeader } from '../../components'

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
  useEffect(() => {}, [navigation, route])

  return (
    <Container>
      <Wrapper>
        <ProfileHeader
          name="michelle perez"
          picture="https://randomuser.me/api/portraits/men/40.jpg"
        />

        <Footer>
          <Text fontFamily="bold" onPress={() => navigation.navigate('Login')}>
            Cerrar Sesión
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ProfileScreen
