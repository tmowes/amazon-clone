import { Search } from '@material-ui/icons'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    > input {
      font-size: 1.6rem;
      height: 32px;
      padding: 10px;
      width: 100%;
      max-width: 480px;
      border: 2px solid ${colors.white};
      border-radius: 0;
      &::placeholder {
        color: ${colors.grayHard};
      }
      &:focus {
        border: 2px solid ${colors.amazon};
      }
    }
  `}
`

export const Icon = styled(Search)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.amazon};
    color: ${colors.header};
    padding: 6px;
    width: 32px !important;
    height: 32px !important;
  `}
`
