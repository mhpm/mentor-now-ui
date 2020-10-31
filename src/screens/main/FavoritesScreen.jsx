import React from 'react'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'
import Container from '../../components/Container'
import MentorCard from '../../components/MentorCard'
import Wrapper from '../../components/Wrapper'
import { FlatList } from 'react-native'

const FavoritesScreen = () => {
  const { loading, data } = useFetch('https://randomuser.me/api/?results=4')

  return (
    <Container style={{ paddingTop: 30 }}>
      <Wrapper loading={loading} style={{ padding: 10, paddingBottom: 90 }}>
        <FlatList
          style={{ width: 100 + '%' }}
          data={data}
          renderItem={(item) => (
            <MentorCard key={item.cell} item={item.item} hearth />
          )}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default FavoritesScreen
