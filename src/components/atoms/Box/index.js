import React from 'react'
import BoxWrapper from './style'

const Box = ({children, ...props}) => {
  return (
    <BoxWrapper {...props}>
      {children}
    </BoxWrapper>
  )
}

export default Box
