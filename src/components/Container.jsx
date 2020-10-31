import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Image from '../../assets/bg.jpg'
import styled from 'styled-components'

const ContainerStyled = styled(View)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const Background = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 25px;
  top: 50px;
  z-index: 99;
  padding: 10px;
`

const Container = (props) => {
  const navigation = useNavigation()
  const { children, loading, icon, ...rest } = props

  return (
    <ContainerStyled>
      <Background {...rest} source={Image}>
        {icon && (
          <BackButton onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={32} color="#fbc02d" />
          </BackButton>
        )}
        {loading ? (
          <ActivityIndicator size="large" color="#fbc02d" />
        ) : (
          children
        )}
      </Background>
    </ContainerStyled>
  )
}

export default Container
