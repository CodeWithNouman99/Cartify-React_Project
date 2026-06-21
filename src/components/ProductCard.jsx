import React, { memo, useCallback, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const FALLBACK_IMAGE = '/images/product-fallback.jpg'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [imgSrc, setImgSrc] = useState(
    product?.thumbnail || product?.images?.[0] || FALLBACK_IMAGE
  )
  const [isAdding, setIsAdding] = useState(false)

  if (!product) return null

  const goToProduct = useCallback(() => {
    navigate(`/products/${product.id}`)
  }, [navigate, product.id])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      goToProduct()
    }
  }

  const handleAddToCart = async (e) => {
    e.stopPropagation()
    if (isAdding) return
    try {
      setIsAdding(true)
      await addToCart(product)
    } finally {
      setIsAdding(false)
    }
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price)

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={goToProduct}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${product.title}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
    >
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
        <img
          src={imgSrc}
          alt={product.title}
          loading="lazy"
          decoding="async"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-slate-900">
          {product.title}
        </h3>
        <p className="my-2 text-lg font-bold text-slate-900 tracking-tight">
          {formattedPrice}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isAdding}
          aria-label={`Add ${product.title} to cart`}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-base font-semibold text-white transition-all duration-200  hover:bg-gray-800 hover:text-white hover:border-gray-800 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          <IoCartOutline className="h-5 w-5" aria-hidden="true" />
          {isAdding ? 'Adding…' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}

export default memo(ProductCard)
