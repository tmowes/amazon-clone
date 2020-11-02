import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 16px 0;
`

export const Content = styled.div`
  display: flex;
  min-width: 480px;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 10px;
`

export const Info = styled.div`
  padding-left: 20px;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
`

export const Code = styled.h3``

export const Image = styled.img`
  object-fit: contain;
  width: 160px;
  height: 160px;
`
export const SubInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Price = styled.strong``

export const Rating = styled.div`
  display: flex;
`

export const Title = styled.p`
  font-size: 1.4rem;
  overflow: hidden;
  max-height: 4.2rem;
  height: 4.2rem;
`

export const RemoveFromBasket = styled.button`
  border: 1px solid;
  padding: 0 10px;
  margin: 0 auto;
  margin-top: 16px;
  border-radius: 4px;
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  &:hover {
    background: #bd8e18;
  }
`
