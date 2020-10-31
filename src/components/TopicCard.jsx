import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components'
import Text from './Text'

const Container = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 5px;
  background-color: #212529;
`

const Title = styled(Text)`
  text-transform: capitalize;
`

const SubText = styled(Text)`
  font-size: 14px;
  color: darkgray;
`

const TopicCard = ({ item }) => {
  const navigation = useNavigation()
  const [rating, setRating] = useState(0)
  const { _id, topic, mentores } = item

  const getRanting = useCallback(() => {
    let random = Math.random() * 5 + 1
    setRating(random)
  }, [rating])

  useEffect(() => {
    getRanting()
  }, [])

  const goProfile = () => {
    //navigation.navigate('MentorProfile', { topic: { _id } })
  }

  return (
    <Container onPress={goProfile}>
      <Title weight="bold" size="28px" color="#fbc02d">
        {topic}
      </Title>
      <SubText>{mentores} Mentores</SubText>
    </Container>
  )
}

export default React.memo(TopicCard)
