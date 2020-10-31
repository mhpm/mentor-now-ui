import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, View, Image } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import Rating from './Rating'
import Text from './Text'

const Container = styled(Pressable)`
  flex-direction: row;
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: #212529;
`

const LeftColumn = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
`

const Column = styled(View)`
  padding: 10px;
  width: 55%;
`

const RightColumn = styled(View)`
  flex: auto;
  justify-content: center;
  align-items: center;
`

const Avatar = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`

const SubText = styled(Text)`
  font-size: 14px;
  color: darkgray;
`

const MentorCard = ({ item, hearth }) => {
  const navigation = useNavigation()
  const [rating, setRating] = useState(0)
  const { name, picture, dob } = item

  const getRanting = useCallback(() => {
    let random = Math.random() * 5 + 1
    setRating(random)
  }, [rating])

  useEffect(() => {
    getRanting()
  }, [])

  const goProfile = () => {
    navigation.navigate('MentorProfile', { info: { name, picture } })
  }

  return (
    <Container onPress={goProfile}>
      <LeftColumn>
        <Avatar source={{ uri: picture.medium }} />
      </LeftColumn>
      <Column>
        <Text>{name.first + ' ' + name.last}</Text>
        <SubText>Software Engineere</SubText>
        <SubText>Mentorias impartidas: {dob.age}</SubText>
        <Rating value={rating} color="#fbc02d" />
      </Column>
      <RightColumn>
        {hearth && <AntDesign name="heart" size={28} color="white" />}
      </RightColumn>
    </Container>
  )
}

export default React.memo(MentorCard)
