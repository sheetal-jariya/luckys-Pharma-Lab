"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Decorative blur circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
            Quality Medicines, <br />
            <span className="text-blue-600">Trusted Care</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Lucky’s Pharma delivers high-quality pharmaceutical products with
            safety, trust, and innovation at the core.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium
                         shadow-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              View Products
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-blue-600 px-6 py-3
                         text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center animate-float">
          <Image
            src="/hero-doctor.png"   // 👈 image path
            alt="Pharma Doctor"
            width={420}
            height={420}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
