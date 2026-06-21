import React, { useEffect } from "react";
import { useState } from "react";
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
          item.price <= priceRange[1],
      ) || []
    );
  };

  //For pagination
  const [page, setPage] = useState(1);
  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  const dynamicPage = Math.ceil(filterData?.length / 8);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]); // Added dependency

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleBrandChange(e) {
    setBrand(e.target.value);
  }

  const handleSearchChange = (e) => {
    console.log(e);
    const value = e.target.value;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      {data?.length > 0 ? (
        <>
          <div className="flex gap-8">
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

            <div className="grid grid-cols-4 gap-7 mt-10">
              {filterData()
                ?.slice(page * 8 - 8, page * 8)
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />; // Fixed component name
                })}
            </div>
          </div>
          <Pagination
            pageHandler={pageHandler}
            page={page}
            dynamicPage={dynamicPage}
          ></Pagination>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <FaBoxOpen size={60} className="text-gray-400 mb-4" />{" "}
          {/* Fixed JSX */}
          <p className="text-gray-500 text-lg">No Products yet</p>
        </div>
      )}
    </div>
  );
};

export default Products;
