import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PromoBanner() {
  const navigate=useNavigate()
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-lg">
        <img
          src="https://i.pinimg.com/736x/f8/02/9d/f8029d3668365dca6ee5cf2ebfc4d8fb.jpg"
          alt="Promotional accessories"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative grid gap-8 px-8 py-16 sm:px-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70">
              Limited time
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Up to 30% off<br />the essentials.
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              A capsule edit of refined staples — chosen for everyday wear, priced for the moment.
              Ends Sunday.
            </p>
            <button onClick={()=>navigate("/products")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-gray-900 transition hover:gap-3 hover:opacity-90">
              Shop the Sale
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
