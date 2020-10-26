import React from 'react'
import { ActivityIndicator } from 'react-native'
import Image from '../../assets/bg.jpg'
import styled from 'styled-components'

const ContainerStyled = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
`

const Container = (props) => {
  const { children, loading, ...rest } = props

  return (
    <ContainerStyled {...rest}>
      <Background source={Image}>
        {loading ? <ActivityIndicator size="large" color="#fff" /> : children}
      </Background>
    </ContainerStyled>
  )
}

export default Container
