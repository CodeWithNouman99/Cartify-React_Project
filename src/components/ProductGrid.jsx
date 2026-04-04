import React from "react";

// Product Data
const products = [
  { image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1024&fit=crop", name: "Luxury Skincare Set", price: "$89", category: "Beauty", description: "Complete luxury skincare kit for radiant skin.", rating: 4.5, link: "/category/beauty" },
  // { image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=1024&fit=crop", name: "Premium Makeup Kit", price: "$124", category: "Beauty", description: "High-quality makeup essentials for every look.", rating: 4.8, link: "/category/beauty" },
  { image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=1024&fit=crop", name: "Modern Armchair", price: "$599", category: "Furniture", description: "Stylish and comfortable armchair for any living room.", rating: 4.7, link: "/category/furniture" },
  // { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=1024&fit=crop", name: "Minimalist Coffee Table", price: "$349", category: "Furniture", description: "Simple and elegant coffee table.", rating: 4.6, link: "/category/furniture" },
  { image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=1024&fit=crop", name: "Woody Aroma Perfume", price: "$95", category: "Fragrances", description: "Long-lasting woody fragrance.", rating: 4.4, link: "/category/fragrances" },
  // { image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1024&fit=crop", name: "Floral Scent Diffuser", price: "$45", category: "Fragrances", description: "Delightful floral aroma for your home.", rating: 4.3, link: "/category/fragrances" },
  { image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1024&fit=crop", name: "Organic Fruit Basket", price: "$39", category: "Groceries", description: "Fresh organic fruits packed for your health.", rating: 4.5, link: "/category/groceries" },
  // { image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&h=1024&fit=crop", name: "Fresh Vegetable Pack", price: "$28", category: "Groceries", description: "Seasonal vegetables for your daily meals.", rating: 4.4, link: "/category/groceries" },
];

const categories = ["Beauty", "Furniture", "Fragrances", "Groceries"];

const ProductGrid = () => {
  return (
    <div>
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase mb-2">Shop by Category</p>
            <h2 className="text-3xl md:text-5xl font-medium">Featured Products</h2>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="cursor-pointer group"
                onClick={() => (window.location.href = p.link)}
              >
                {/* Image */}
                <div className="bg-black/5 rounded-lg overflow-hidden mb-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Info */}
                <p className="text-[10px] uppercase text-black/70">{p.category}</p>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-black/80">{p.description}</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold">{p.price}</span>
                  <div className="text-yellow-500">
                    {Array.from({ length: 5 }, (_, star) => (
                      <span key={star}>
                        {star < Math.round(p.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="mt-2 w-full py-2 border border-black rounded-lg hover:bg-black hover:text-white transition text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    // window.location.href = p.link;
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <a
                key={i}
                href={`/category/${cat.toLowerCase()}`}
                className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition text-sm"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>        
      </section>
      
    </div>
    
  );
};

export default ProductGrid;