import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 480px;
    height: 150px;
    padding: 20px;
    border-radius: 0.4rem;
    color: ${colors.background};
    border: 1px solid ${colors.trueWhite};
    background-color: ${colors.white};
  `}
`

export const Gift = styled.small`
  display: flex;
  align-items: center;
  > input {
    margin-right: 5px;
  }
`

export const Title = styled.p`
  display: flex;
`

export const Total = styled.strong`
  padding-left: 5px;
`

export const Proceed = styled.button`
  border: 1px solid;
  padding: 0 10px;
  border-radius: 0.4rem;
  height: 30px;
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  &:hover {
    background: #bd8e18;
  }
`
