import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import { Shirt, Footprints, ShoppingBag, Watch, Glasses, Headphones, Laptop } from "lucide-react";
const Categories = ({selectedCategory, setSelectedCategory}) => {
  const { data, fetchAllProducts, categoryOnlyData } = getData();

  // Fetch data
  useEffect(() => {
    if (data.length === 0) {
      fetchAllProducts();
    }
  }, []);

  // Optional: limit to 6 categories (skip "All")
  const categories = categoryOnlyData.slice(1, 7);

  // Icons mapping (for UI like your image)
  const icons = {
    smartphones: <Headphones size={24} />,
    laptops: <Laptop size={24} />,
    fragrances: <Watch size={24} />,
    skincare: <Shirt size={24} />,
    groceries: <ShoppingBag size={24} />,
    "home-decoration": <Glasses size={24} />,
  };

  return (
    <section className="bg-gray-100 py-20">
      {/* Heading */}
      <div className="flex justify-center items-center flex-col mb-10">
        <h3 className="text-gray-500 tracking-widest text-sm mb-3">
          BROWSE BY
        </h3>
        <h1 className="font-semibold text-3xl md:text-4xl text-gray-900">
          Shop Categories
        </h1>
      </div>

      {/* Grid */}
      <div className="px-4 md:px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <div
              key={index}
              onClick={()=>setSelectedCategory(cat)}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon circle */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition group-hover:bg-gray-900 group-hover:text-white">
                {icons[cat] || <ShoppingBag size={20} />}
              </div>

              {/* Category Name */}
              <p className="text-sm font-medium text-gray-800 capitalize">
                {cat}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Loading categories...
          </p>
        )}
      </div>
    </section>
  );
};

export default Categories;