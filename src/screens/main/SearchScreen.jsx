import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Container, Wrapper, MentorCard, SearchBar } from '../../components'
import { FlatList } from 'react-native'

const SearchScreen = () => {
  const { loading, data } = useFetch('https://randomuser.me/api/?results=100')

  return (
    <Container pt="6%">
      <SearchBar />
      <Wrapper p="10px" pb="80px" loading={loading}>
        <FlatList
          style={{ width: 100 + '%' }}
          data={data?.results}
          renderItem={(item) => (
            <MentorCard primary key={item.cell} item={item.item} />
          )}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default SearchScreen
