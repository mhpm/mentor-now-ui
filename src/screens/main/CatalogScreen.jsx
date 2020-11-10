import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Container,
  SearchBar,
  TopicCard,
  Box,
  Text,
  Wrapper,
} from '../../components'
import { FlatList } from 'react-native'

const List = styled(FlatList)`
  width: 100%;
`

const topics = [
  {
    _id: '0',
    topic: 'matemáticas',
    mentores: 11,
  },
  {
    _id: '1',
    topic: 'ciencias',
    mentores: 30,
  },
  {
    _id: '2',
    topic: 'progración',
    mentores: 50,
  },
  {
    _id: '3',
    topic: 'arte',
    mentores: 11,
  },
  {
    _id: '4',
    topic: 'musica',
    mentores: 15,
  },
  {
    _id: '5',
    topic: 'Ingles',
    mentores: 50,
  },
  {
    _id: '6',
    topic: 'Cafetería',
    mentores: 11,
  },
  {
    _id: '7',
    topic: 'Algoritmos',
    mentores: 15,
  },
]

const CatalogScreen = () => {
  const [data, setData] = useState(topics)
  const [loading, setLoading] = useState(false)

  return (
    <Container>
      <Wrapper mdCol={8} loading={loading}>
        <SearchBar />
        <Box my={10} p={10} bg="primary" width="100%" borderRadius={7}>
          <Text mx="auto" fontFamily="black">
            Top Mas Solicitadas
          </Text>
        </Box>
        <List
          data={data}
          renderItem={(item) => <TopicCard key={item._id} item={item.item} />}
          keyExtractor={(item) => item._id}
        />
      </Wrapper>
    </Container>
  )
}

export default React.memo(CatalogScreen)
