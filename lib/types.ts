export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: 'tshirt' | 'hoodie' | 'limited'
  sizes: string[]
  colors: string[]
  inStock: boolean
  featured?: boolean
  drop?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color: string
}

export interface CustomerOrder {
  id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  shippingInfo: {
    fullName: string
    phone: string
    address: string
  }
  createdAt: Date
}
