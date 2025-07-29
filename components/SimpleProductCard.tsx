'use client'

import React from 'react'
import Link from 'next/link'
import { SimpleProduct } from '@/lib/productData'

interface SimpleProductCardProps {
  product: SimpleProduct
  className?: string
  showPrice?: boolean
  layout?: 'default' | 'centered'
}

const SimpleProductCard: React.FC<SimpleProductCardProps> = ({
  product,
  className = '',
  showPrice = true,
  layout = 'default'
}) => {
  const isHoodie = product.category === 'HOODIE'
  
  return (
    <Link href={`/product/${product.id}`}>
      <div className={`relative cursor-pointer group ${className}`}>
        <div className="aspect-square bg-white overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {showPrice && (
          <div className={`mt-2 ${layout === 'centered' ? 'text-center' : ''}`}>
            <div className="text-xs text-gray-500 group-hover:text-black transition-colors">
              {product.name}
            </div>
            <div className="font-bold text-sm">₦{product.price.toLocaleString()}</div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default SimpleProductCard
