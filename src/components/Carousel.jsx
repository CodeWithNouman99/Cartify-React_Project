import { useContext, useEffect } from "react";
import { getData } from "../context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const Carousel = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[75vh] md:h-[90vh]"
      >
        {data.slice(0, 7).map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full bg-black">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover opacity-60"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 text-center px-6">
                <span className="text-white/50 text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase mb-4">
                  {String(index + 1).padStart(2, "0")} / {String(Math.min(data.length, 7)).padStart(2, "0")}
                </span>

                <h2 className="text-white text-3xl md:text-6xl lg:text-7xl font-black mb-3 leading-[0.95] max-w-4xl tracking-tighter uppercase">
                  {item.title}
                </h2>

                <div className="w-12 h-0.5 bg-white/40 my-5" />

                <p className="text-white/60 text-sm md:text-base mb-8 max-w-md font-light leading-relaxed">
                  {item.description.slice(0, 80)}...
                </p>

                <button className="group relative bg-white text-black px-10 py-4 text-xs font-bold tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 hover:bg-black hover:text-white border border-white">
                  Shop Now
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Carousel;
