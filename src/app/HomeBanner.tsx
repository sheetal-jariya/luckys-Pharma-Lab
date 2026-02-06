"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  "/images/banner1.jpeg",
  "/images/banner2.jpeg",
];

export default function HomeBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="relative w-full overflow-hidden m-0 p-0 -mt-px">

      {/* SLIDER */}
      <div
        className="flex transition-transform duration-[1200ms] ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((src, i) => (
          <div
            key={i}
            className="
              relative w-full flex-shrink-0
              aspect-[16/9]
              sm:aspect-[16/8]
              xl:h-[500px] xl:aspect-auto
            "
          >
            <Image
              src={src}
              alt="Lucky Pharma Banner"
              fill
              priority={i === 0}
              quality={100}
              className="
                object-contain
                xl:object-cover
              "
            />
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={goNext}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2
                   z-20 h-10 w-10 items-center justify-center rounded-full
                   bg-white/80 text-black shadow hover:bg-white"
      >
        ‹
      </button>

      <button
        onClick={goNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2
                   z-20 h-10 w-10 items-center justify-center rounded-full
                   bg-white/80 text-black shadow hover:bg-white"
      >
        ›
      </button>
    </section>
  );
}
