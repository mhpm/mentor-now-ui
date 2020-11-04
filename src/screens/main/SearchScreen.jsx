import React from 'react'
import useFetch from '../../hooks/useFetch'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import MentorCard from '../../components/MentorCard'
import SearchBar from '../../components/SearchBar'
import { FlatList } from 'react-native'

const SearchScreen = () => {
  const { loading, data } = useFetch('https://randomuser.me/api/?results=100')

  return (
    <Container style={{ paddingTop: 30 }}>
      <SearchBar />
      <Wrapper loading={loading} style={{ padding: 10, paddingBottom: 70 }}>
        <FlatList
          style={{ width: 100 + '%' }}
          data={data}
          renderItem={(item) => (
            <MentorCard primary key={item.cell} item={item.item} hearth />
          )}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default SearchScreen
