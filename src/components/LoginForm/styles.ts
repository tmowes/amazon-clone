import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoContainer = styled.div`
  width: 166px;
  height: 70px;
  cursor: pointer;
  margin: 0.8rem 2rem 0;
`

export const Logo = styled(Image)`
  object-fit: contain;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  width: 300px;

  border: 1px solid;
  padding: 2rem;
  border-radius: 4px;
  border-color: #a88734 #9c7e31 #846a29;
`
export const Title = styled.h1`
  margin-bottom: 16px;
  font-weight: 500;
`

export const Form = styled.form`
  width: 100%;
  margin: 0 16px;
  > input {
    height: 30px;
    width: 100%;
    padding: 0 16px;
  }
`

export const Label = styled.h5`
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
`

export const SignInButton = styled.button`
  margin-top: 8px;
  height: 30px;
  border: 1px solid;
  border-radius: 4px;
  width: 100%;
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  &:hover {
    background: #bd8e18;
  }
`

export const RegisterButton = styled.button`
  border: 1px solid;
  height: 30px;
  width: 100%;
  border-radius: 4px;
  background: #eee;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  &:hover {
    background: #ccc;
  }
`
