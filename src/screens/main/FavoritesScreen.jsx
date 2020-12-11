import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Container, MentorCard, Wrapper, Box, Text } from '../../components'
import { FlatList } from 'react-native'

const FavoritesScreen = () => {
  const { loading, data } = useFetch('https://randomuser.me/api/?results=10')
  return (
    <Container p="10px">
      <Box my={10} p={10} bg="primary" width="100%" borderRadius={7}>
        <Text mx="auto" fontFamily="black">
          Mentores Favoritos
        </Text>
      </Box>
      <Wrapper mt="1%" loading={loading}>
        <FlatList
          style={{ width: 100 + '%' }}
          data={data.results}
          renderItem={(item) => (
            <MentorCard key={item.cell} item={item.item} hearth />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
          keyExtractor={(item) => item.cell}
        />
      </Wrapper>
    </Container>
  )
}

export default FavoritesScreen
