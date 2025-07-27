// Static product ratings to prevent hydration mismatches
export const productRatings = {
  'snuggles-pandit-tee': { rating: 4.5, reviewCount: 127 },
  'peace-of-mind-tee': { rating: 4.3, reviewCount: 89 },
  'kids-next-door-tee': { rating: 4.7, reviewCount: 203 },
  'snuggles-rainbow-hoodie': { rating: 4.6, reviewCount: 156 },
  'snuggles-signature-hoodie': { rating: 4.8, reviewCount: 342 },
  'classic-logo-tee-black': { rating: 4.4, reviewCount: 98 },
  'flame-logo-tshirt': { rating: 4.5, reviewCount: 167 },
  'black-snuggles-hoodie': { rating: 4.7, reviewCount: 234 }
}

export const getProductRating = (productId: string) => {
  return productRatings[productId as keyof typeof productRatings] || { rating: 4.5, reviewCount: 100 }
}
