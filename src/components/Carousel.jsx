import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600",
    eyebrow: "Spring Collection 2025",
    title: "Quiet Luxury,\nLoud Statements.",
    subtitle: "Discover timeless pieces designed for the modern minimalist.",
    cta: "Shop the Collection",
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600",
    eyebrow: "New Season",
    title: "Less, but\nbetter.",
    subtitle: "Crafted essentials made to outlast trends and seasons.",
    cta: "Explore New Arrivals",
  },
];

export default function HeroCarousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const id = setInterval(() => emblaApi.scrollNext(), 2000);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[80vh] min-h-130 w-full overflow-hidden bg-gray-100">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/30 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl animate-fade-in">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                        {s.eyebrow}
                      </p>
                      <h1 className="mt-4 whitespace-pre-line text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        {s.title}
                      </h1>
                      <p className="mt-5 max-w-md text-base text-gray-600">{s.subtitle}</p>
                      <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-85 hover:gap-3">
                        {s.cta}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${selected === i ? "w-8 bg-gray-900" : "w-1.5 bg-gray-900/30"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
