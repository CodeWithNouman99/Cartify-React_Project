import { ShoppingBag, Heart } from "lucide-react";

const products = [
  { name: "Velvet Accent Chair", price: 299, category: "Furniture", badge: "New" },
  { name: "Organic Honey Set", price: 24, category: "Groceries", badge: "New" },
  { name: "Noir Eau de Parfum", price: 89, category: "Fragrances", badge: "New" },
  { name: "Glow Serum Kit", price: 65, category: "Beauty", badge: "Trending" },
  { name: "Marble Side Table", price: 189, category: "Furniture", badge: "New" },
  { name: "Lavender Body Oil", price: 42, category: "Beauty", badge: "New" },
  { name: "Artisan Pasta Bundle", price: 18, category: "Groceries", badge: "Trending" },
  { name: "Rose Oud Candle", price: 55, category: "Fragrances", badge: "New" },
];

const NewArrivals = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Just In</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square bg-accent rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-muted-foreground/30" />
                </div>
                <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-foreground text-primary-foreground px-3 py-1 rounded-full">{product.badge}</span>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-4 h-4 text-foreground" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-foreground text-primary-foreground text-xs tracking-[0.15em] uppercase py-2.5 rounded-md hover:bg-foreground/90 transition-colors">Add to Cart</button>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-1">{product.category}</p>
              <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
              <p className="text-sm text-foreground mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
