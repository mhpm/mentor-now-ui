import React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'
import { space, color, layout, flexbox } from 'styled-system'

const StyledBox = styled(View)`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`

const Box = (props) => {
  return <StyledBox {...props} />
}

export default Box
