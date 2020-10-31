import React from 'react'
import styled from 'styled-components'
import useFetch from '../../../hooks/useFetch'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import MentorCard from '../../components/MentorCard'
import SearchBar from '../../components/SearchBar'

const List = styled.FlatList`
  width: 100%;
`

const SearchScreen = ({ navigation }) => {
  const { loading, data } = useFetch('https://randomuser.me/api/?results=100')

  return (
    <Container style={{ paddingTop: 30 }}>
      <SearchBar />
      <Wrapper loading={loading} style={{ padding: 10, paddingBottom: 90 }}>
        <List
          data={data}
          renderItem={(item) => <MentorCard key={item.cell} item={item.item} />}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default SearchScreen
