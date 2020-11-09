export interface CheckoutProductProps {
  product: {
    id: number
    code: string
    title: string
    price: number
    rating: number
    image: string
    alt: string
    location: string
  }
  hiddenButton?: boolean
}
