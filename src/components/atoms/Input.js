import React from 'react'
import styled from 'styled-components'

const Input = ({type, placeholder, onChange}) => {
  return (
    <InputWrapper type={type} placeholder={placeholder} onChange={onChange} />
  )
}


export const InputWrapper = styled('input')`
  
`

export default Input