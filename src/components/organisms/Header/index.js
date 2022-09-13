import { useState } from 'react'
import Logo from '@/components/atoms/Logo'
import Container from '@/components/molecules/Container'
import Navbar from '@/components/molecules/Navbar'
import MobileNav from '@/components/molecules/Navbar/MobileNav'
import { HeaderWrapper, Flex, IconWrapper } from './style'
import { HiMenuAlt2 } from 'react-icons/hi'


const Header = () => {
  const [show, setShow] = useState(false)

  const handleOpen = () => {
    setShow(true)
  }


  return (
    <HeaderWrapper>
      <Container>
        <Flex>
          <Logo />
          {!show ? <Navbar /> : 
          <MobileNav handleClose={() => setShow(false)} /> }
          <IconWrapper>
            <HiMenuAlt2 onClick={handleOpen} />
          </IconWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
