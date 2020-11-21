import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { View, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Container from '../../components/Container'
import { ProfileHeader, Text, Box } from '../../components'
import AuthContext from '../../context/auth/authContext'

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

const ProfileScreen = ({ navigation }) => {
  const { signOut, user } = useContext(AuthContext)

  return (
    <Container>
      <Wrapper>
        <ProfileHeader name={user.name} picture={user.picture} />
        <Box mt="120px">
          <Text fontFamily="light" mx="auto">
            {user.email}
          </Text>
        </Box>
        <Footer>
          <Text fontFamily="bold" onPress={signOut}>
            Cerrar Sesión
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ProfileScreen
