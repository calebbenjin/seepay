import styled from 'styled-components'


export const NavWrapper = styled('nav')`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 0;
    display: none;
  }
`;

export const NavLarge = styled('nav')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const CloseIcon = styled('div')`
  position: fixed;
  top: 2rem;
  right: 4%;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.brand};
`

export const LogoFooter = styled('div')`
  position: fixed;
  bottom: 4rem;
  left: 45%;
`

export const MobileNavWrapper = styled('nav')`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    padding: 3rem;

    a {
      display: block;
      line-height: 80px;
      font-weight: 600;
    }
  }
`;

