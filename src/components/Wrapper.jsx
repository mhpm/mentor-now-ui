import React from 'react'
import styled from 'styled-components'
import { ActivityIndicator, SafeAreaView } from 'react-native'
import theme from '../theme/LightTheme'

const WrapperStyled = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
`

const Spinner = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Wrapper = (props) => {
  const { children, loading, ...rest } = props

  return (
    <WrapperStyled {...rest}>
      {loading ? (
        <Spinner size="large" primary color={theme.colors.primary} />
      ) : (
        children
      )}
    </WrapperStyled>
  )
}

export default Wrapper
