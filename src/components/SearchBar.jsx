import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesome5 } from '@expo/vector-icons'

const Container = styled.View`
  height: 70px;
  width: 100%;
  padding: 10px;
  position: relative;
`

const Input = styled.TextInput`
  padding-left: 17px;
  padding-right: 17px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-radius: 50px;
  background-color: #2c2c2c;
  color: gray;
  font-size: 18px;
  min-height: 60px;
`

const Icon = styled(FontAwesome5)`
  position: absolute;
  right: 30px;
  top: 25px;
  z-index: 9;
  color: #575757;
`

const SearchBar = (props) => {
  const [text, setText] = useState('')
  const { children, ...rest } = props
  return (
    <Container {...rest}>
      {text.length > 0 ? (
        <Icon onPress={() => setText('')} name="times" size={26} />
      ) : (
        <Icon name="search" size={26} />
      )}
      <Input
        placeholderTextColor="gray"
        placeholder="Buscar..."
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
    </Container>
  )
}

export default SearchBar
