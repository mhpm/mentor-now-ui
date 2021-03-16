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
  height: 110px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: #2c2c2c;
`

const LeftColumn = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`

const Column = styled(View)`
  padding: 10px;
  width: 60%;
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

const MentorCard = ({ mentor }) => {
  const navigation = useNavigation()
  const [rating, setRating] = useState(0)
  const { first_name, last_name, stars, is_favorite } = mentor
  const { image, id } = mentor.profile

  const getRanting = useCallback(() => {
    let random = Math.random() * 5 + 1
    setRating(random)
  }, [rating])

  useEffect(() => {
    getRanting()
  }, [])

  const goProfile = () => {
    navigation.navigate('MentorProfile', {
      info: { ...mentor.profile, first_name, last_name, stars },
    })
  }

  return (
    <Container onPress={goProfile}>
      <LeftColumn>
        <Avatar source={{ uri: image }} />
      </LeftColumn>
      <Column>
        <Text fontFamily="bold">{first_name + ' ' + last_name}</Text>
        <Text fontFamily="light" fontSize="14px">
          Software Engineere
        </Text>
        {/* <Text fontFamily="light" fontSize="14px">
          Mentorias impartidas: {id}
        </Text> */}
        <Rating primary value={stars} />
      </Column>
      <RightColumn>
        {is_favorite && (
          <AntDesign
            name="heart"
            size={22}
            color="white"
            style={{ paddingRight: 10 }}
          />
        )}
      </RightColumn>
    </Container>
  )
}

export default React.memo(MentorCard)
