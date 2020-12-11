import React, { useState } from 'react'
import {
  Container,
  SearchBar,
  TopicCard,
  Box,
  Text,
  Wrapper,
} from '../../components'
import { FlatList } from 'react-native'
import Topics from '../../mock/Topics'

const CatalogScreen = () => {
  const [data, setData] = useState(Topics)
  const [loading, setLoading] = useState(false)

  return (
    <Container pt="6%" px="10px">
      <SearchBar mb="-10px" />
      <Wrapper mdCol={8} loading={loading}>
        <Box my={10} p={10} bg="primary" width="100%" borderRadius={7}>
          <Text mx="auto" fontFamily="black">
            Top Mas Solicitadas
          </Text>
        </Box>
        <FlatList
          style={{ width: 100 + '%' }}
          data={data}
          renderItem={(item) => <TopicCard key={item._id} item={item.item} />}
          contentContainerStyle={{ paddingBottom: 70 }}
          keyExtractor={(item) => item._id}
        />
      </Wrapper>
    </Container>
  )
}

export default React.memo(CatalogScreen)
