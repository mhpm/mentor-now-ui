import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import TopicCard from '../../components/TopicCard'
import SearchBar from '../../components/SearchBar'
import Text from '../../components/Text'
import { SafeAreaView, FlatList, View } from 'react-native'

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding-bottom: 70px;
`

const List = styled(FlatList)`
  width: 100%;
`

const TopBar = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fbc02d;
  margin: 10px;
  padding: 11px;
  border-radius: 7px;
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
    <Container style={{ paddingTop: 5 + '%' }}>
      <SearchBar />
      <Wrapper loading={loading}>
        <TopBar>
          <Text weight="bold">Top Mas Solicitadas</Text>
        </TopBar>
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
