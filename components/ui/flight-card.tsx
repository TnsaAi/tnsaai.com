"use client";

import Image from "next/image";
import { Tag, Cpu } from "lucide-react";

interface FlightCardProps {
  title: string;
  subtitle: string;
  price?: string;
  buttonText?: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
}

export const FlightCard = ({
  title,
  subtitle,
  price,
  buttonText = "Learn more",
  category,
  imageUrl = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
  imageAlt = "Card image",
  href
}: FlightCardProps) => {

  const handleButtonClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className="w-full max-w-[390px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
        fill
        priority
      />

      {/* Bottom Gradient Overlay with Fading Blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-black/40 via-transparent to-transparent backdrop-blur-sm" 
        style={{
          maskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)'
        }} 
      />

      {/* Title and Subtitle - Top */}
      <div className="absolute top-0 left-0 right-0 p-6 z-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white mb-0.5 leading-none">
            {title}
          </h2>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {/* Price and Category Info */}
        <div className="flex items-center gap-6 mb-5">
          {price && (
            <div className="flex items-center gap-2 text-white">
              <Tag className="w-[18px] h-[18px] text-white/80" />
              <span className="text-base font-normal">
                from <span className="font-bold">{price}</span>
              </span>
            </div>
          )}
          {category && (
            <div className="flex items-center gap-2 text-white">
              <Cpu className="w-[18px] h-[18px] text-white/80" />
              <span className="text-base font-semibold">{category}</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleButtonClick}
          className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold text-base py-[15px] rounded-full transition-all"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};