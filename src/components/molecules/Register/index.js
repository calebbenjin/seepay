import Input from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import React from 'react'
import { FormWrapper, InputButton, InputWrapper } from './style'

const RegForm = () => {
  return (
    <FormWrapper>
      <InputWrapper>
        <Label title="Register using email address" />
        <Input type="email" placeholder="Calebbenjin@gmail.com" />
      </InputWrapper>
      <InputButton>Submit</InputButton>
    </FormWrapper>
  )
}

export default RegForm
