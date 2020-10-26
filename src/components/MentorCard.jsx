import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Rating from './Rating'
import Text from './Text'

const Container = styled.Pressable`
  flex-direction: row;
  width: 100%;
  height: 120px;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 5px;
  background-color: #212529;
`

const LeftColumn = styled.View`
  width: 25%;
`

const RightColumn = styled.View`
  flex: auto;
`

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`

const SubText = styled(Text)`
  font-size: 14px;
  color: darkgray;
`

const MentorCard = ({ item }) => {
  const [rating, setRating] = useState(0)
  const { name, picture, dob, login } = item

  const getRanting = useCallback(() => {
    let random = Math.random() * 5 + 1
    setRating(random)
  }, [rating])

  useEffect(() => getRanting(), [])

  const goProfile = () => {}

  return (
    <Container onPress={goProfile}>
      <LeftColumn>
        <Avatar source={{ uri: picture.medium }} />
      </LeftColumn>
      <RightColumn>
        <Text>{name.first + ' ' + name.last}</Text>
        <SubText>Software Engineere</SubText>
        <SubText>Mentorias impartidas: {dob.age}</SubText>
        <Rating value={rating} color="#fbc02d" />
      </RightColumn>
    </Container>
  )
}

export default React.memo(MentorCard)
