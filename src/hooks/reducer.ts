import { ActionsProps, Product, StateProps } from './types'

export const initialState: StateProps = {
  basket: [],
  user: null,
}

export const getBasketTotal = (basket: Product[]): number => {
  if (basket) {
    return basket.reduce((amount, { price }) => price + amount, 0)
  }
  return 0
}

const reducer = (state: StateProps, action: ActionsProps) => {
  console.log({ action })
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

    case 'REMOVE_FROM_BASKET': {
      const index = state.basket.findIndex(product => product.id === action.id)
      const newBasket = [...state.basket]
      if (index !== -1) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product id: ${action.id} as its not in basket.`,
        )
      }
      return { ...state, basket: newBasket }
    }

    case 'SET_USER':
      return { ...state, user: action.user }

    case 'EMPTY_BASKET':
      return { ...state, basket: [] }

    default:
      return state
  }
}

export default reducer
