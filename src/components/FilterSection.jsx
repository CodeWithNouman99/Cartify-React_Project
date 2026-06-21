import React, { useState } from 'react'
import { getData } from '../context/DataContext'
const FilterSection = ({ search, setSearch, category, setCategory, brand, setBrand, priceRange, setpriceRange,handleCategoryChange,handleBrandChange}) => {
  const { categoryOnlyData, brandOnlyData } = getData()
  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max'>
      <input className='bg-white rounded-md border-gray-400 border-2 p-2' onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search...'
        value={search}>
      </input>

      {/* Category Only Data */}
      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className='flex flex-col gap-2 mt-3'>
        {
          categoryOnlyData?.map((item, index) => {
            return <div key={index} className='flex gap-2'>
              <input type="checkbox" name={item} checked={category===item} value={item} onChange={handleCategoryChange} />
              <button className='cursor-pointer uppercase'>{item}</button>
            </div>
          })
        }
      </div>

      {/* For Brand only data */}
      <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
      <select name="" id="" className='bg-white w-full p-2 border-gray-200 border-2 rounded-md' value={brand} onChange={handleBrandChange}>
        {
          brandOnlyData?.map((item,index)=>
          {
            return <option key={index} value={item}>{item}</option>
          })
        }
      </select>

      {/* For Price Range */}
    {/* <h1 className="mt-5 font-semibold text-xl mb-3 text-gray-900">
  Price Range
</h1>

<div className="flex flex-col gap-2">
  <label className="text-gray-700 font-medium">
    Price Range: ${priceRange[0]} - ${priceRange[1]}
  </label>

  <input
    type="range"
    min={0}
    max={5000}
    value={priceRange[1]}
    onChange={(e) =>
      setpriceRange([priceRange[0], Number(e.target.value)])
    }
    className="w-full cursor-pointer accent-gray-800"
  />
</div> */}
    </div>
  )
}

export default FilterSection
