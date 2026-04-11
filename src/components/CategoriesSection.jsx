// import categoryFurniture from "@/assets/category-furniture.jpg";
// import categoryGroceries from "@/assets/category-groceries.jpg";
// import categoryFragrances from "@/assets/category-fragrances.jpg";
// import categoryBeauty from "@/assets/category-beauty.jpg";

const categories = [
  { name: "Furniture", image: "https://i.pinimg.com/736x/6c/93/7c/6c937c125013cdd3080169ee92a65d15.jpg", count: 120 },
  { name: "Groceries", image: "https://i.pinimg.com/736x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg", count: 340 },
  { name: "Fragrances", image: "https://i.pinimg.com/1200x/9e/bd/4f/9ebd4f19e1b076e1d5be12d360440035.jpg", count: 85 },
  { name: "Beauty", image: "https://i.pinimg.com/736x/0d/31/9f/0d319fe012771d55203f94934a62448b.jpg", count: 210 },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Browse</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a key={cat.name} href="#" className="group relative overflow-hidden rounded-lg aspect-3/4 cursor-pointer">
              <img src={cat.image} alt={cat.name} loading="lazy" width={640} height={800} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                <h3 className="text-xl md:text-2xl font-medium tracking-wide">{cat.name}</h3>
                <p className="text-sm mt-2 opacity-80">{cat.count} Products</p>
                <span className="mt-4 text-xs tracking-[0.2em] uppercase border-b border-primary-foreground/60 pb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Explore</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
