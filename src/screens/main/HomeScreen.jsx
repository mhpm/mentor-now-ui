import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Wrapper from '../../components/Wrapper'

const CustomWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <CustomWrapper>
        <Text
          weight="bold"
          size={'46px'}
          style={{ textAlign: 'center', color: '#fbc02d' }}
        >
          ¡Bienvenido!
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 30 }}>
          Nuestros Mentores están listo y entusiasmados por ayudarte con tus
          materias o alguna actividad que desees aprender
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 30 }}>
          Puedes buscar por materias o topicos de tu interes, como musica,
          danza, lenguas, fisica, matematicas, etc.
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 30 }}>
          ó si lo prefieres buscar por tu mentor favorito.
        </Text>
      </CustomWrapper>
    </Container>
  )
}

export default HomeScreen
