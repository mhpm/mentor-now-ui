import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Text from '../../components/Text'
import { View, Image } from 'react-native'
import Wrapper from '../../components/Wrapper'

const Header = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #212529;
  padding-top: 120px;
`

const Border = styled(View)`
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

const Avatar = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  margin: 0px;
  padding: 0px;
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

const MentorProfileScreen = ({ route }) => {
  const { info } = route.params
  const { name, picture } = info

  return (
    <Container icon>
      <Wrapper>
        <Header>
          <Text weight="bold" size="22px">
            {name.first + ' ' + name.last}
          </Text>
          <Border>
            <Avatar source={{ uri: picture.large }} />
          </Border>
        </Header>
      </Wrapper>
    </Container>
  )
}

export default MentorProfileScreen
