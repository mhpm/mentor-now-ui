import React from 'react'
import useMentors from '../../hooks/useMentors'
import { Container, Wrapper, MentorCard, Box, Text } from '../../components'
import { FlatList } from 'react-native'

const MentorsScreen = () => {
  const { getMentors } = useMentors()
  const { loading, data } = getMentors()

  return (
    <Container pt="12%" px="10px">
      <Box mb={10} p={10} bg="primary" width="100%" borderRadius={7}>
        <Text mx="auto" fontFamily="black">
          Mentores Disponibles
        </Text>
      </Box>
      <Wrapper mdCol={8} loading={loading}>
        <FlatList
          style={{ width: 100 + '%' }}
          data={data}
          renderItem={({ item }) => (
            <MentorCard primary key={item.id} mentor={item} />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
          keyExtractor={(item) => String(item.id)}
        />
      </Wrapper>
    </Container>
  )
}

export default MentorsScreen
