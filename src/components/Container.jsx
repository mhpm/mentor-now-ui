import React from 'react'
import Image from '../../assets/bg.jpg'
import styled from 'styled-components'

const ContainerStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Container = (props) => {
  const { children, ...rest } = props
  return (
    <ContainerStyled {...rest}>
      <Background source={Image}>{children}</Background>
    </ContainerStyled>
  )
}

export default Container
