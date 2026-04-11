import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", text: "The furniture collection is stunning. My living room feels like a magazine cover now.", rating: 5 },
  { name: "James K.", text: "Best organic groceries I've found online. Fresh, fast delivery, and great prices.", rating: 5 },
  { name: "Amira L.", text: "The Noir fragrance is absolutely divine. Compliments every single time I wear it.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-3">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-primary-foreground">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-primary-foreground/10 rounded-lg p-8 text-center">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
