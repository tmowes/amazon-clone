import styled, { css } from 'styled-components'

export const Container = styled.div`
  min-width: 480px;
`

export const CheckoutTitle = styled.h1`
  ${({ theme: { colors } }) => css`
    padding: 10px;
    text-align: center;
    font-weight: 400;
    border-bottom: 1px solid ${colors.amazon};
    font-size: 1.8rem;
    > a {
      padding-left: 6px;
      color: ${colors.amazon};
      &:hover {
        color: ${colors.amazonHover};
        text-decoration: underline;
      }
    }
  `}
`

export const Content = styled.div``

export const Section = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.amazon};
    margin: 0;
    padding: 20px;
  `}
`

export const Title = styled.div`
  flex: 0.2;
`

export const AddressContent = styled.div`
  flex: 0.7;
`

export const Address = styled.div``

export const OrdersItems = styled.div`
  flex: 0.7;
`

export const PaymentDetails = styled.div`
  flex: 0.7;
  color: white;
`
export const PriceContainer = styled.div``

export const PayButton = styled.button`
  border: 1px solid;
  padding: 0 10px;
  height: 30px;
  width: 100%;
  border-radius: 4px;
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  transition: background-color 0.2s;
  &:hover {
    background: #bd8e18;
  }
`
