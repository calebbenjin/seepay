import styled from 'styled-components'
import Button from '../Button'


export const FormWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 100px;
  // box-shadow: 0px 2.49px 15px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4.35199px 134.912px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  background: #fff;

  @media screen and (max-width: 768px)  {
    padding: 0px 10px;
    height: 50px;
  }
`

export const InputWrapper = styled('div')`
  background: ${({ theme }) => theme.colors.white};

  label {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    opacity: 0.4;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 24px;
    font-weight: 700;
    color: #000000;
    margin-top: 10px;
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    

    label {
      font-size: 10px;
    }

    input {
      font-size: 0.8rem;
      margin-top: 5px;
    }
  }
`

export const InputButton = styled(Button)`
  background: #000;
  border-radius: 0px; 
  width: 231px; 
  height: 65px;
  font-size: 20px;

  @media screen and (max-width: 768px)  {
    width: 200px; 
    height: 35px;
    font-size: 1rem;
  }
`;