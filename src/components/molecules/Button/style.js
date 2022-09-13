import styled from 'styled-components'


export const ButtonWrapper = styled('button')`
  margin-left: 2rem;
  height: 52px;
  width: 137px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brand};
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    
  }
`;