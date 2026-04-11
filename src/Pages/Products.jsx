import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import ProductCard from "../components/ProductCard"
import { FaBoxOpen } from "react-icons/fa";
const Products = () => {
  const { data, fetchAllProducts } = getData()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setpriceRange] = useState([0, 5000])

  useEffect(() => {
    fetchAllProducts()
  }, [])
  const handleCategorychange = (e) => {
    setCategory(e.target.value)
  }
  const handleBrandchange = (e) => {
    setBrand(e.target.value)
  }
  const filterData = () => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );

    // const pageHandler=(selectedPage)=>
    // {
    //   setPage(selectedPage)
    // }
  }
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (<div className='flex gap-8'>
            <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} category={category} setCategory={setCategory} priceRange={priceRange} setpriceRange={setpriceRange} handleBrandchange={handleBrandchange} handleCategorychange={handleCategorychange}></FilterSection>
            <div className='grid grid-cols-4 gap-7 mt-10'>
              {
                filterData()?.map((product, index) => {
                  return <ProductCard key={index} product={product}></ProductCard>
                })
              }
            </div>
          </div>) :
            <div className="flex flex-col items-center justify-center py-20">
              <FaBoxOpen size={60} className="text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No products yet</p>
            </div>
        }
      </div>
    </div>
  )
}

export default Products
