import { DocumentData } from '@google-cloud/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '~/firebase'
import { useStateValue } from '~/hooks/StateProvider'
import Order from './Order'
import * as S from './styles'

export interface OrderItemProps {
  id: string
  data: DocumentData
}

const OrderList: React.FC = () => {
  const [{ user }] = useStateValue()

  const [orders, setOrders] = useState<OrderItemProps[]>([])

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot =>
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data(),
            })),
          ),
        )
    } else {
      setOrders([])
      console.log('error')
    }
  }, [])
  console.log('orders', orders)

  return (
    <S.Container>
      <h1>Your Orders</h1>
      <S.OrdersList>
        {orders && orders.map(order => <Order key={order.id} {...{ order }} />)}
      </S.OrdersList>
    </S.Container>
  )
}

export default OrderList
