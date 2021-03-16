import React from 'react'
import {
  Container,
  Button,
  Text,
  Wrapper,
  TopicCard,
  Rating,
  Box,
  ProfileHeader,
} from '../../components/'
import { ScrollView } from 'react-native'

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
]

const MentorProfileScreen = ({ route }) => {
  const { info } = route.params
  const { first_name, last_name, image, stars, experience } = info

  return (
    <Container icon>
      <Wrapper mdCol={12}>
        <ScrollView
          style={{
            marginBottom: 10,
            width: '100%',
            flex: 1,
          }}
          contentContainerStyle={{}}
        >
          <ProfileHeader name={`${first_name} ${last_name}`} picture={image} />
          <Wrapper p={3} mdCol={6} mt="110px">
            <Text fontFamily="black">Senior Software Developer</Text>
            <Text fontFamily="light">Inivercidad Autonoma de Mexíco</Text>
            <Text fontFamily="light">
              Mentorias impartidas: {Math.floor(stars * 4)}
            </Text>
            <Rating primary value={stars} />
            <Button fluid style={{ marginTop: 20 }} variant="primary">
              AGENDAR
            </Button>

            <Box bg="dark" width="100%" py={2} mb={2} mt={3}>
              <Text fontSize="18px" mx="auto" fontFamily="bold">
                Acerca de mi ...
              </Text>
            </Box>
            <Text style={{ textAlign: 'justify' }} fontFamily="light">
              {experience}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis tenetur culpa, vitae, architecto possimus accusantium,
              aut explicabo temporibus ab maxime ea illo ullam voluptas
              recusandae. Nostrum harum quos eum alias. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Mollitia quibusdam aperiam,
              sapiente accusantium labore dolor obcaecati eos maiores numquam
              voluptatum atque perferendis placeat ipsa ullam quam doloribus
              exercitationem quod unde! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus quibusdam harum tempore illo culpa
              iste quod officia soluta debitis nostrum. Exercitationem corrupti
              asperiores sequi reprehenderit sint eius reiciendis non voluptate!
            </Text>
            {/* <Box bg="dark" width="100%" py={2} mb={2} mt={3}>
              <Text fontSize="18px" mx="auto" fontFamily="bold">
                TOPICOS QUE IMPARTE
              </Text>
            </Box>
            {topics.map((item) => (
              <TopicCard key={item._id} item={item} />
            ))} */}
          </Wrapper>
        </ScrollView>
      </Wrapper>
    </Container>
  )
}

export default MentorProfileScreen
