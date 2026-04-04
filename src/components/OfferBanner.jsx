import React from "react";
import { ArrowRight } from "lucide-react";

const OfferBanner = () => {
  return (
    <div className="bg-[#f8f5f0] text-black flex items-center justify-between px-6 md:px-16 py-8 rounded-2xl shadow-lg overflow-hidden">

      {/* Left Images */}
      <div className="hidden md:flex gap-3">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1024&fit=crop"
          alt=""
          className="w-30 h-34 object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=1024&fit=crop"
          alt=""
          className="w-30 h-34 object-cover rounded-lg"
        />
      </div>

      {/* Center Content */}
      <div className="text-center max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Get 50% Off
        </h2>
        <p className="text-sm md:text-base text-black/70 mb-4">
          On all new arrivals. Minimum purchase $450
        </p>

        {/* Simple Button */}
        <button className="flex items-center gap-2 mx-auto px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition text-sm font-medium">
          Shop Now
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Right Images */}
      <div className="hidden md:flex gap-3">
        <img
          src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=1024&fit=crop"
          alt=""
          className="w-30 h-34 object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1024&fit=crop"
          alt=""
          className="w-30 h-34 object-cover rounded-lg"
        />
      </div>

    </div>
  );
};

export default OfferBanner;