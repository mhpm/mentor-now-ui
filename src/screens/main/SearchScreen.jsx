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

const SearchScreen = ({ navigation }) => {
  return (
    <Container>
      <SubText>Search</SubText>
    </Container>
  )
}

export default SearchScreen
