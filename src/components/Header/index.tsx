import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'
import SearchInput from './SearchInput'
import { Container, Content, Logo, LogoContainer } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link href="/">
          <LogoContainer>
            <Logo
              src="/amazon-logo.svg"
              alt="AMAZON CLONE"
              width="166"
              height="70"
            />
          </LogoContainer>
        </Link>
        <SearchInput />
        <NavBar />
      </Content>
    </Container>
  )
}

export default Header
