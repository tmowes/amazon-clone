/* eslint-disable prettier/prettier */
import { Dispatch } from 'react'

export interface Product {
  id: number
  code: string
  title: string
  price: number
  rating: number
  image: string
  alt: string
  location: string
}

export type ActionsProps =
  | {
    type: 'ADD_TO_BASKET'
    item: Product
  }
  | {
    type: 'REMOVE_FROM_BASKET'
    id: number
  }
  | {
    type: 'SET_USER'
    user: string | null
  }

export interface StateProps {
  basket: Product[]
  user: string | null
}

export interface ContextProps {
  reducer: (state: StateProps, action: ActionsProps) => StateProps
}

export interface StateProviderProps {
  reducer: (state: StateProps, action: ActionsProps) => StateProps
  initialState: StateProps
}

export interface StateContextData {
  state: StateProps
  dispatch: Dispatch<ActionsProps>
}
