import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Verified Buyer",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    text: "Absolutely love the quality and minimalist design. Every piece I've ordered feels timeless and well-crafted. The shipping was incredibly fast and the packaging felt premium.",
    product: "Linen Overshirt",
  },
  {
    name: "James Carter",
    role: "Verified Buyer",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    text: "Cartify has become my go-to for essentials. The fit is perfect, the materials are premium, and everything pairs effortlessly. Five stars without hesitation.",
    product: "Wool Crewneck",
  },
  {
    name: "Elena Rodriguez",
    role: "Verified Buyer",
    location: "Barcelona, ES",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    text: "Customer service was outstanding when I needed an exchange. The products speak for themselves — clean, modern, and built to last for many seasons to come.",
    product: "Leather Tote",
  },
];

const stats = [
  { value: "4.9", label: "Average Rating" },
  { value: "12K+", label: "Happy Customers" },
  { value: "98%", label: "Would Recommend" },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-400">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Trusted by Modern Shoppers
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Real feedback from customers who value clean design, quality products, and a seamless shopping experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Decorative quote */}
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-gray-100 transition-colors duration-300 group-hover:text-gray-200"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="mb-5 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-gray-900 text-gray-900"
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-2 text-xs font-medium text-gray-500">
                  {t.rating}.0
                </span>
              </div>

              {/* Text */}
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-gray-700">
                "{t.text}"
              </p>

              {/* Product tag */}
              <span className="mb-6 inline-flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Purchased: {t.product}
              </span>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-5">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:ring-gray-300"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 ring-2 ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="h-2.5 w-2.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-white py-8 shadow-sm">
          {stats.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <p className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
