import styled from 'styled-components'


export const HeaderWrapper = styled('header')`
  padding: 1.5rem 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 768px)  {
    ${'' /* padding: 1rem 0; */}
  }
`
export const IconWrapper = styled('div')`
  font-size: 2rem;
  opacity: 0.6;
  display: none;

  @media screen and (max-width: 768px)  {
    display: block;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    ${'' /* background: red; */}
  }
`