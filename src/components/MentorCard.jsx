import React from 'react'
import styled from 'styled-components'
import Rating from './Rating'

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 120px;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 5px;
  background-color: #212529;
`
const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
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

const MentorCard = ({ data }) => {
  return (
    <Container>
      <LeftColumn>
        <Avatar source={{ uri: data.avatar }} />
      </LeftColumn>
      <RightColumn>
        <Text>{data.first_name + ' ' + data.last_name}</Text>
        <SubText>Software Engineere</SubText>
        <SubText>Mentorias impartidas: 34</SubText>
        <Rating value={3.6} />
      </RightColumn>
    </Container>
  )
}

export default MentorCard
