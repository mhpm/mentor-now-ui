import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`

const Spinner = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Wrapper = (props) => {
  const { children, loading, ...rest } = props

  return (
    <WrapperStyled {...rest}>
      {loading ? <Spinner size="large" color="#fbc02d" /> : children}
    </WrapperStyled>
  )
}

export default Wrapper
