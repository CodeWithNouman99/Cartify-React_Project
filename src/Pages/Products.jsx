import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import { FaBoxOpen } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Products = () => {
  const { data, fetchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const filterData = () => {
    return (
      data?.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) &&
          (category === "All" || item.category === category) &&
          (brand === "All" || item.brand === brand) &&
          item.price >= priceRange[0] &&
          item.price <= priceRange[1]
      ) || []
    );
  };

  // Pagination
  const [page, setPage] = useState(1);

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const dynamicPage = Math.ceil(filterData().length / 8);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleBrandChange(e) {
    setBrand(e.target.value);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 mb-10">
      {data?.length > 0 ? (
        <>
          {/* Responsive Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-72 shrink-0">
              <FilterSection
                search={search}
                setSearch={setSearch}
                brand={brand}
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange}
              />
            </div>

            {/* Products */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 lg:mt-10">
                {filterData()
                  .slice(page * 8 - 8, page * 8)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
              </div>
            </div>
          </div>

          <Pagination
            pageHandler={pageHandler}
            page={page}
            dynamicPage={dynamicPage}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <FaBoxOpen size={60} className="text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg">No Products yet</p>
        </div>
      )}
    </div>
  );
};

export default Products;