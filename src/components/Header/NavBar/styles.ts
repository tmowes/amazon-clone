import { ShoppingBasket } from '@material-ui/icons'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const NavOption = styled.nav`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: ${colors.amazon};
    }
  `}
`

export const OptionOne = styled.span`
  font-size: 1.2rem;
`

export const OptionTwo = styled.strong`
  font-size: 1.4rem;
  font-weight: 800;
`
export const NavCart = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: ${colors.amazon};
    }
  `}
`

export const BasketIcon = styled(ShoppingBasket)`
  padding: 6px;
  width: 36px !important;
  height: 36px !important;
`

export const BasketCount = styled.span`
  ${OptionTwo}
  margin: auto;
  text-align: center;
  width: 32px;
`
