import Box from '@/components/atoms/Box'
import styled from 'styled-components'
import { NavWrapper, NavLarge, MobileNav } from './style'
import Link from 'next/link'
import Button from '../Button'

const Navbar = () => {
  return (
    <NavWrapper>
      <FlexBox>
        <Link href='/'>
          <a>Products</a>
        </Link>
        <Link href='/'>
          <a>Templates</a>
        </Link>
        <Link href='/'>
          <a>Blog</a>
        </Link>
        <Link href='/'>
          <a>Pricing</a>
        </Link>
      </FlexBox>
      <FlexBox>
        <Link href='/'>
          <a>Sign in</a>
        </Link>
        <Button>Start Free</Button>
      </FlexBox>
    </NavWrapper>
  )
}

export const FlexBox = styled(Box)`
  a {
    margin-left: 1.8rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #000;
  }
`

export default Navbar
