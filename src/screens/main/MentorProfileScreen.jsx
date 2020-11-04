import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Text from '../../components/Text'
import { View, Image, ScrollView } from 'react-native'
import Wrapper from '../../components/Wrapper'
import TopicCard from '../../components/TopicCard'
import Rating from '../../components/Rating'
import { Row, Col } from 'react-native-responsive-grid-system'

const Header = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 170px;
  background-color: #2c2c2c;
  padding-top: 120px;
`

const Border = styled(View)`
  padding: 0px;
  width: 130px;
  height: 130px;
  border-radius: 120px;
  border-width: 5px;
  border-color: white;
  position: relative;
  top: 20px;
  z-index: 1;
`

const Avatar = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  margin: 0px;
  padding: 0px;
`

const Body = styled(View)`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 900px;
  margin-top: 80px;
  padding-bottom: 90px;
`

const Footer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 110px;
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
]

const MentorProfileScreen = ({ route }) => {
  const { info } = route.params
  const { name, picture, rating } = info

  return (
    <Container icon>
      <Wrapper>
        <Row>
          <Col>
            <ScrollView
              style={{ marginBottom: 10 }}
              contentContainerStyle={{ paddingBottom: 100 + '%' }}
            >
              <Header>
                <Text weight="bold" size="22px">
                  {name.first + ' ' + name.last}
                </Text>
                <Border>
                  <Avatar source={{ uri: picture.large }} />
                </Border>
              </Header>
              <Body>
                <Text weight="bold">Senior Software Developer</Text>
                <Text weight="200">Inivercidad Autonoma de Mexíco</Text>
                <Text weight="200">
                  Mentorias impartidas: {Math.floor(rating * 4)}
                </Text>
                <Rating primary value={rating} />
                <Button fluid style={{ marginTop: 20 }} variant="primary">
                  AGENDAR
                </Button>

                <Text style={{ marginTop: 20 }} size="30px" weight="bold">
                  CURRICULUM
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                  Lorem Ipsum is simply dummy text of the printing and typ
                  esetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typeset ting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus Page Maker including versions of Lorem Ipsum.Lorem
                  Ipsum is simply dummy text of the printing and typ esetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text
                  style={{ marginTop: 10, marginBottom: 10 }}
                  size="30px"
                  weight="bold"
                >
                  TOPICOS QUE IMPARTE
                </Text>
                {topics.map((item) => (
                  <TopicCard key={item._id} item={item} />
                ))}
              </Body>
            </ScrollView>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  )
}

export default MentorProfileScreen
