import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    background-color: ${colors.header};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7rem;
    position: sticky;
    top: 0;
    z-index: 100;
  `}
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
  max-width: 1468px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
