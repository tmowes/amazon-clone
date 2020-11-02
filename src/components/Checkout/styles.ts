import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: max-content;
  margin-bottom: 10px;
`

export const LeftSide = styled.div``

export const CheckoutContainer = styled.div``

export const CheckoutTitle = styled.h2`
  ${({ theme: { colors } }) => css`
    margin-right: 10px;
    color: ${colors.white};
    border-bottom: 2px solid ${colors.amazon};
    padding: 10px;
  `}
`
