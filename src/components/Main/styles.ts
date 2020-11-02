import styled from 'styled-components'

export const Container = styled.div`
  /* margin: 0 auto; */
  max-width: 1500px;
  > img {
    width: 100%;
    z-index: -1;
    margin-bottom: -250px;
    mask-image: linear-gradient(to bottom, #000, transparent);
  }
`
export const ProductRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  z-index: 1;
  &::after {
    content: '';
    flex: auto;
  }
`
