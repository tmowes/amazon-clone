/* eslint-disable import/no-duplicates */
import { format, fromUnixTime } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import React, { useMemo } from 'react'
import CheckoutProduct from '~/components/Checkout/CheckoutProduct'
import { Product } from '~/hooks/types'
import { formatCurrency } from '~/utils'

import { Container } from './styles'
import { OrderProps } from './types'

const Order: React.FC<OrderProps> = ({ order: { id, data } }) => {
  const orderDateFormatted = useMemo(() => {
    return format(
      fromUnixTime(data.created),
      "'Dia 'dd' de 'MMMM' as 'HH:mm:ss'",
      {
        locale: ptBr,
      },
    )
  }, [data.created])

  const formattedCurrency = useMemo(() => {
    return formatCurrency(data.amount / 100)
  }, [])

  return (
    <Container>
      <h2>Order</h2>
      <p>{orderDateFormatted}</p>
      <p>{id}</p>
      <p>{formattedCurrency}</p>
      {data.basket.map((product: Product, index: number) => (
        <CheckoutProduct
          key={product.id + index}
          hiddenButton
          {...{ product }}
        />
      ))}
    </Container>
  )
}

export default Order
