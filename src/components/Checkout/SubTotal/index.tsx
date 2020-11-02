import React, { useMemo } from 'react'
import { getBasketTotal } from '~/hooks/reducer'
import { useStateValue } from '~/hooks/StateProvider'
import { formatCurrency } from '~/utils'
import { Container, Gift, Proceed, Title, Total } from './styles'

const SubTotal: React.FC = () => {
  const [{ basket }] = useStateValue()

  const formattedCurrency = useMemo(() => {
    return formatCurrency(getBasketTotal(basket))
  }, [basket])

  return (
    <Container>
      <Title>
        {`Subtotal (${basket.length} items): `}
        <Total>{formattedCurrency}</Total>
      </Title>
      <Gift>
        <input type="checkbox" />
        This order contains a gift
      </Gift>
      <Proceed>Proceed to Checkout</Proceed>
    </Container>
  )
}

export default SubTotal
