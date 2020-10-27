import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ActivityIndicator } from 'react-native'
import Container from '../../components/Container'
import MentorCard from '../../components/MentorCard'
import SearchBar from '../../components/SearchBar'

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding-bottom: 90px;
`

const List = styled.FlatList`
  width: 100%;
`

const SearchScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results)
        setLoading(false)
      })
  }, [])

  return (
    <Container style={{ paddingTop: 30 }}>
      <SearchBar />
      <Wrapper>
        {loading ? (
          <ActivityIndicator size="large" color="#fbc02d" />
        ) : (
          <List
            data={data}
            renderItem={(item) => (
              <MentorCard key={item.cell} item={item.item} />
            )}
            keyExtractor={(item) => item.cell}
          />
        )}
      </Wrapper>
    </Container>
  )
}

export default SearchScreen
