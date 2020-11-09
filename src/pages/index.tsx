import React, { useEffect } from 'react'
import { Header, Main, SEO } from '~/components'
import { auth } from '~/firebase'
import { useStateValue } from '~/hooks/StateProvider'
import { Container } from '~/styles/pages'

export default function Home() {
  const [, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('authUser', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: {
            email: authUser.email!,
            uid: authUser.uid,
          },
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Container>
      <SEO title="Home" />
      <Header />
      <Main />
    </Container>
  )
}
