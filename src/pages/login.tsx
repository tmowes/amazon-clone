import React from 'react'
import { LoginForm, SEO } from '~/components'
import { Container } from '~/styles/pages'

export default function Login() {
  return (
    <Container>
      <SEO title="Login" />
      <LoginForm />
    </Container>
  )
}
