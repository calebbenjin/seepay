import styled from 'styled-components'

const Logo = () => {
  return (
    <LogoWrapper>SeePay</LogoWrapper>
  )
}

const LogoWrapper = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.bolder};
  font-size: 1.5rem;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export default Logo
