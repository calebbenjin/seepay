import React from 'react'
import { HeroSection, Flex, Title, Content, HeroImg, Span, TextWrapper } from './style'
import heroImg from '@/assets/heroimg.png'
import Image from 'next/image'
import Container from '@/components/molecules/Container'
import RegForm from '@/components/molecules/Register'

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Flex>
          <Content>
            <Span>Product Growth Solution in Single Platform.</Span>
            <Title>Managing business payments has never been easier</Title>
            <TextWrapper>Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</TextWrapper>
            <RegForm />
          </Content>
          <HeroImg>
            <Image src={heroImg} alt="heroImg" responsive="fill" />
          </HeroImg>
        </Flex>
      </Container>
    </HeroSection>
  )
}




export default Hero
