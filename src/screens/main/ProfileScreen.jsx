import React, { useEffect } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Text from '../../components/Text'

const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  margin-top: 0;
  padding-bottom: 90px;
`

const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #212529;
  padding-top: 120px;
`

const Border = styled.View`
  padding: 0px;
  width: 130px;
  height: 130px;
  border-radius: 120px;
  border-width: 5px;
  border-color: white;
  position: relative;
  top: 30px;
  z-index: 1;
`

const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  margin: 0px;
  padding: 0px;
`

const Footer = styled.View`
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
        <Header>
          <Text weight="bold" size="22px">
            Michelle Perez Morales{' '}
          </Text>
          <Border>
            <Avatar
              source={{ uri: 'https://randomuser.me/api/portraits/men/74.jpg' }}
            />
          </Border>
        </Header>
        <Text size="16px" color="#cecece">
          Mentores favoritos
        </Text>
        <Footer>
          <Text weight="bold" onPress={() => navigation.navigate('Login')}>
            Logout
          </Text>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ProfileScreen
