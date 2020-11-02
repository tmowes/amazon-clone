/* eslint-disable no-alert */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, useCallback, useState } from 'react'
import { auth } from '~/firebase.js'
import {
  Container,
  Content,
  Description,
  Form,
  Label,
  Logo,
  LogoContainer,
  RegisterButton,
  SignInButton,
  Title,
} from './styles'

const LoginForm: React.FC = () => {
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSign = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      auth.signInWithEmailAndPassword(email, password).then(authResponse => {
        if (authResponse) {
          push('/')
        }
      })
    },
    [email, password],
  )

  const onRegister = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(authResponse => {
          if (authResponse) {
            push('/')
          }
        })
        .catch(err => alert(err.message))
    },
    [email, password],
  )

  return (
    <Container>
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
      <Content>
        <Title>Sign-in</Title>
        <Form onSubmit={onSign}>
          <Label>E-mail</Label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Label>Password</Label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <SignInButton type="submit">Sign In</SignInButton>
        </Form>
        <Description>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </Description>
        <RegisterButton onClick={onRegister}>
          Create your Amazon Account
        </RegisterButton>
      </Content>
    </Container>
  )
}

export default LoginForm
