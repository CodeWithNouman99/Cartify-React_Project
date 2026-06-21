import React, { useEffect,useState } from 'react'
import { ArrowRight } from "lucide-react";
import { getData } from "../context/DataContext"
const HomeProductCard = ({ selectedCategory }) => {
  const { data, fetchAllProducts } = getData()

  // me chahata ho k jab view all pr click ho tu us specific category ki all products show ho jae is liye ye line
   const [showAll, setShowAll] = useState(false)
  useEffect(() => {
    fetchAllProducts()
  }, [])

  // 4 categories jo me dikhana chahta ho
  // const selectedCategories = ["smartphones", "laptops", "fragrances", "skincare"]

  // // Jo categories me ne select ki he sirf un ki products k liye
  // const filterProducts = data.filter(product =>
  //   selectedCategories.includes(product.category)
  // )


  // //Me sirf 4 product hi dikhana chahata ho


  // const finalProducts = filterProducts.slice(0, 4)

  const filteredProducts =
    selectedCategory==="All"
      ? data
      : data.filter(p => p.category === selectedCategory);
        const finalProducts =  showAll ? filteredProducts : filteredProducts.slice(0, 4);


  return (
    <div className='px-4 py-6 md:px-8'>
      {/*1st  Section Header */}
      <div className='mb-6'>
        <h3 className='text-xs tracking-widest text-gray-500 uppercase mb-2'>Curated for You</h3>
      </div>

      {/* 2nd Section Header */}
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl md:text-3xl font-bold text-gray-900'>Featured Products</h1>
        <button onClick={()=>setShowAll(true)} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black transition">
          View All <ArrowRight size={16} />
        </button>
      </div>

      {/* Products Grid */}
      {finalProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {finalProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl p-2 border border-gray-100 hover:shadow-md transition cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={product.thumbnail || product.images?.[0]}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="mt-2 space-y-0.5">
                <h2 className="text-xs font-medium text-gray-800 line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-[10px] text-gray-500">
                  ⭐ {product.rating}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    ${product.price}
                  </p>

                  <button className="opacity-0 group-hover:opacity-100 text-[10px] px-2 py-0.5 bg-gray-900 text-white rounded transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )


        : (<div>No Products Yet</div>)
      }


    </div>
  )
}

export default HomeProductCard
