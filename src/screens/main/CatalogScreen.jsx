import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import MentorCard from '../../components/MentorCard'

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const SubText = styled(Text)`
  margin-top: 20px;
`

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  padding-bottom: 90px;
`

const List = styled.FlatList`
  width: 100%;
`

const SearchBar = styled.View`
  background-color: gray;
  height: 80px;
  width: 100%;
  margin-bottom: 15px;
`

const CatalogScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((data) => setData(data.data))
  }, [])
  return (
    <Container>
      <Wrapper>
        <SearchBar />
        <List
          data={data}
          renderItem={(item) => (
            <MentorCard key={item.index} data={item.item} />
          )}
          keyExtractor={(item) => item.index}
        />
      </Wrapper>
    </Container>
  )
}

export default CatalogScreen
