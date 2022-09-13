import styled from 'styled-components'
import Text from '@/components/atoms/Text';


export const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding-top: 10rem;
  align-items: center;
  justify-content: center;
  background-image: url('/leftherobg.png');
  background-position: left;
  background-size: 63% 115%;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 6rem;
    background-position: top;
    background-size: 100% 60%;
  }
`;



export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xl};
  font-weight: ${({ theme }) => theme.fonts.bolder};
  line-height: 80px;
  letter-spacing: -3px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 35px;
    letter-spacing: -1.5px;
    margin-top: 10px;
  }
`

export const Content = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const TextWrapper = styled(Text)`
  color: ${({ theme }) => theme.colors.grey};
  line-height: 35px;
  letter-spacing: -2;
  font-size: ${({ theme }) => theme.fonts.lg};
  font-weight: 400;
  margin-top: 0.7rem;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.md};
    line-height: 25px;
    letter-spacing: -1;
  }
`

export const HeroImg = styled.div`
  width: 60%;
  position: absolute;
  right: 0rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
  }
  
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`