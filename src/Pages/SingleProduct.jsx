import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const SingleProduct = ({ product }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const [quantity, setQuantity] = useState(1)
  const { addToCart, cartItem } = useCart()
  const params = useParams()
  console.log(params)

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${params.id}`)
      const product = response.data
      setSingleProduct(product)
      // console.log(product)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSingleProduct()
  }, [])
  return (
    <div className='bg-white text-black min-h-screen p-6'>
      {
        singleProduct ? (<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>

          {/* Left images */}
          <div>
            <div className="border rounded-xl p-4">
              <img
                src={activeImage || singleProduct?.thumbnail}
                alt="product"
                className="w-full h-112.5 object-contain rounded-xl transition duration-300 hover:scale-105"
              />
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              {
                singleProduct?.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 object-cover border rounded cursor-pointer ${activeImage === img ? "border-black" : "border-gray-300"
                      }`}
                  />
                ))
              }
            </div>
          </div>

          {/* Right details */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>{singleProduct.title}</h1>
            <p className='text-gray-600'>{singleProduct.description}</p>


            {/* Price + Discount */}
            <div className='flex items-center gap-4'>
              <span className="text-2xl font-semibold">${singleProduct.price}</span>
              <span className="text-sm text-gray-500">-{singleProduct.discountPercentage}%
              </span>
            </div>

            {/* RATING */}
            <div className="text-sm">
              ⭐ {singleProduct.rating} / 5
            </div>

            {/* Stock + Availability */}
            <div className="text-sm">
              Status: <span className='font-medium'>{singleProduct.availabilityStatus}</span>
              {singleProduct.stock} Left
            </div>

            {/* BRAND + CATEGORY */}
            <div className="text-sm text-gray-500">
              Brand: {singleProduct.brand}
            </div>
            <div className="text-sm text-gray-500">
              Category: {singleProduct.category}
            </div>

            {/* SHIPPING */}
            <div className="text-sm">
              🚚 {singleProduct.shippingInformation}
            </div>

            {/* TAGS */}
            <div className="flex gap-2 flex-wrap">
              {singleProduct.tags.map((tag, i) => (
                <span key={i} className="border px-2 py-1 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* DIMENSIONS */}
            <div className="text-sm text-gray-600">
              Size: {singleProduct.dimensions.width} ×{" "}
              {singleProduct.dimensions.height} ×{" "}
              {singleProduct.dimensions.depth} cm
              | Weight: {singleProduct.weight}g
            </div>

            {/* Warrenty + return */}
            <div className="text-sm text-gray-600">
              Warranty: {singleProduct.warrantyInformation}
            </div>
            <div className="text-sm text-gray-600">
              Return: {singleProduct.returnPolicy}
            </div>


            {/* Quantity Section */}
            <div className="flex items-center gap-4 mt-4">
              <h3 className='font-bold'>Quantity</h3>
              <button

                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 bg-gray-200"

              >
                -
              </button>

              <span className="text-lg">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-200"
              >
                +
              </button>
            </div>
            <button onClick={() => addToCart(singleProduct)} className='mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 cursor-pointer">
              Add to Cart'>Add to Cart</button>


          </div>

        </div>) : (<div>Loading</div>)
      }
      {/* REVIEWS SECTION */}
      {singleProduct?.reviews && (
        <div className="max-w-6xl mx-auto mt-16">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>

            <div className="text-sm text-gray-600">
              ⭐ {singleProduct.rating} / 5 • {singleProduct.reviews.length} Reviews
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {singleProduct.reviews.map((review, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 hover:shadow-md transition"
              >

                {/* TOP */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{review.reviewerName}</h3>

                  <span className="text-sm">⭐ {review.rating}</span>
                </div>

                {/* COMMENT */}
                <p className="text-gray-600 text-sm mb-3">
                  {review.comment}
                </p>

                {/* FOOTER */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{review.reviewerEmail}</span>
                  <span>
                    {review.date
                      ? new Date(review.date).toLocaleDateString()
                      : "Verified Purchase"}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  )
}

export default SingleProduct
