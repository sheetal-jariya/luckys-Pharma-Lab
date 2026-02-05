"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function HomeBanner() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-[260px] md:h-[420px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/banners/banner1.jpg"
              alt="Lucky Pharma Banner"
              fill
              priority
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/banners/banner2.jpg"
              alt="Lucky Pharma Banner"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
