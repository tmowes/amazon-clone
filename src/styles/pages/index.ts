import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.background};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 200vh;
  `}
`
