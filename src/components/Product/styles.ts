import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-height: 400px;
    min-width: 200px;
    max-width: 220px;
    background-color: ${colors.trueWhite};
    border-radius: 12px;
    color: ${colors.background};
    /* margin: 1rem auto; */
    margin: 1rem;
    padding: 20px;
    overflow: hidden;
    z-index: 1;
    > img {
      width: 150px;
      height: 150px;
      max-height: 200px;
      object-fit: contain;
      margin: 16px 0;
    }
  `}
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`
export const ProductCode = styled.h3``

export const ProductPrice = styled.strong`
  margin-top: 5px;
`

export const ProductSubInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ProductTitle = styled.span`
  font-size: 1.4rem;
  overflow: hidden;
  max-height: 4.2rem;
  height: 4.2rem;
`

export const ProductRating = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 48px;
  min-width: 128px;
`

export const AddToBasket = styled.button`
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
