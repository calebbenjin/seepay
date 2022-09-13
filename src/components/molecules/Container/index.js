import React from 'react'
import ContainerWrapper from './style'

const Container = ({children, ...props}) => {
  return (
    <ContainerWrapper {...props}>
      {children}
    </ContainerWrapper>
  )
}

export default Container
