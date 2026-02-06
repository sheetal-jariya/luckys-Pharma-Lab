"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="absolute inset-0 flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Quality Medicines <br />
          <span className="text-[#63a8b4]">Trusted Care</span>
        </h1>

        <p className="mt-4 max-w-xl text-sm md:text-lg text-white/90">
          Lucky’s Pharma delivers high-quality pharmaceutical products
          with safety, trust, and innovation.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            href="/products"
            className="rounded-md bg-[#63a8b4] px-6 py-3 text-white
                       hover:bg-[#4f97a3] transition"
          >
            View Products
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-white px-6 py-3
                       hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
