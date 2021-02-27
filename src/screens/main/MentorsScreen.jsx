import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Container, Wrapper, MentorCard, SearchBar } from '../../components'
import { FlatList } from 'react-native'

const MentorsScreen = () => {
  const { loading, data } = useFetch('https://randomuser.me/api/?results=100')

  return (
    <Container pt="12%" px="10px">
      <SearchBar />
      <Wrapper mdCol={8} loading={loading}>
        <FlatList
          style={{ width: 100 + '%' }}
          data={data.results}
          renderItem={(item) => (
            <MentorCard primary key={item.cell} item={item.item} />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default MentorsScreen
