import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import { auth } from '~/firebase.js'
import { useStateValue } from '~/hooks/StateProvider'
import navOptionsData from './navOptionsData'
import {
  BasketCount,
  BasketIcon,
  Container,
  NavCart,
  NavOption,
  OptionOne,
  OptionTwo,
} from './styles'

const NavBar: React.FC = () => {
  const [{ basket, user }] = useStateValue()

  const togglePushToLogin = useMemo(() => {
    if (!user) {
      return '/login'
    }
    return '/'
  }, [user])

  const toggleSignInOut = useMemo(() => {
    if (!user) {
      return 'Sign In'
    }
    return 'Sign Out'
  }, [user])

  const toggleSignState = useCallback(() => {
    if (user) {
      auth.signOut()
    }
  }, [user])

  const toggleWelcomeMessage = useMemo(() => {
    if (!user) {
      return 'Hello guest'
    }
    return `Hello ${user}`
  }, [user])

  return (
    <Container>
      <Link href={togglePushToLogin}>
        <NavOption onClick={toggleSignState}>
          <OptionOne>{toggleWelcomeMessage}</OptionOne>
          <OptionTwo>{toggleSignInOut}</OptionTwo>
        </NavOption>
      </Link>
      {navOptionsData.map(({ id, lineOne, lineTwo, onClick }) => (
        <Link key={id} href={onClick}>
          <NavOption>
            <OptionOne>{lineOne}</OptionOne>
            <OptionTwo>{lineTwo}</OptionTwo>
          </NavOption>
        </Link>
      ))}
      <Link href="/cart">
        <NavCart>
          <BasketIcon />
          <BasketCount>{basket.length}</BasketCount>
        </NavCart>
      </Link>
    </Container>
  )
}

export default NavBar
