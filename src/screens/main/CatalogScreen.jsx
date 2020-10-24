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

const CatalogScreen = ({ navigation }) => {
  return (
    <Container>
      <SubText>Catalog</SubText>
    </Container>
  )
}

export default CatalogScreen
