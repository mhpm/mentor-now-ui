import React from 'react'
import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'

const StarsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 5px;
`

const Text = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: -3px;
`

const Rating = ({ value, text }) => {
  function getStar(index) {
    return (
      <FontAwesome
        key={index}
        size={16}
        style={{ marginRight: 2 }}
        color="white"
        name={
          value >= 1 + index
            ? 'star'
            : value >= index + 0.5
            ? 'star-half-empty'
            : 'star-o'
        }
      />
    )
  }

  return (
    <StarsContainer>
      {[...Array(5)].map((e, index) => getStar(index))}
    </StarsContainer>
  )
}

export default Rating
