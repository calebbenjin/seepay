
import { MobileNavWrapper, LogoFooter, CloseIcon } from './style'
import Link from 'next/link'
import Button from '../Button'
import { IoCloseOutline } from 'react-icons/io5'
import Logo from '@/components/atoms/Logo'

const MobileNav = ({handleOpen, handleClose}) => {
  


  return (
    <>
      <MobileNavWrapper>
        <Link href="/"><a>Products</a></Link>
        <Link href="/"><a>Templates</a></Link>
        <Link href="/"><a>Blog</a></Link>
        <Link href="/"><a>Pricing</a></Link>
        <Link href="/"><a>Sign in</a></Link>
        <Button style={{width: "100%", margin: "0"}}>Start Free</Button>
        <LogoFooter>
          <Logo />
        </LogoFooter>

        <CloseIcon>
          <IoCloseOutline onClick={handleClose} />
        </CloseIcon>
      </MobileNavWrapper>
      {/* <IconWrapper>
        <HiMenuAlt2 onClick={handleOpen} />
      </IconWrapper> */}
    </>
  )
}

export default MobileNav