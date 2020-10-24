import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const SubText = styled(Text)`
  margin-top: 20px;
`

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <SubText>Home</SubText>
    </Container>
  )
}

export default HomeScreen
