import React from 'react'
import { Container, Icon } from './styles'

const SearchInput: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Search a product..." />
      <Icon />
    </Container>
  )
}

export default SearchInput
