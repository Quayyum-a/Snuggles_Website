'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product, CartItem } from '@/lib/types'

interface CartState {
  items: CartItem[]
  isOpen: boolean
  total: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; size: string; color: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }

interface CartContextType extends CartState {
  addItem: (product: Product, size: string, color: string) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, color } = action.payload
      const itemId = `${product.id}-${size}-${color}`
      
      const existingItem = state.items.find(
        item => `${item.product.id}-${item.size}-${item.color}` === itemId
      )

      let newItems: CartItem[]
      
      if (existingItem) {
        newItems = state.items.map(item =>
          `${item.product.id}-${item.size}-${item.color}` === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newItems = [...state.items, { product, quantity: 1, size, color }]
      }

      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        ...state,
        items: newItems,
        total: newTotal,
        isOpen: true
      }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        item => `${item.product.id}-${item.size}-${item.color}` !== action.payload
      )
      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      
      return {
        ...state,
        items: newItems,
        total: newTotal
      }
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id })
      }

      const newItems = state.items.map(item =>
        `${item.product.id}-${item.size}-${item.color}` === id
          ? { ...item, quantity }
          : item
      )
      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

      return {
        ...state,
        items: newItems,
        total: newTotal
      }
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0
      }

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      }

    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true
      }

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false
      }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (product: Product, size: string, color: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, size, color } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' })
  }

  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0)

  const value: CartContextType = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    itemCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
