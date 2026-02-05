"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ================= TOP INFO BAR ================= */}
      <div className="hidden md:block bg-[#63a8b4] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

          {/* Left */}
          <marquee className="w-1/2">
            Do not post Job, raw material & personal enquiries.
          </marquee>

          {/* Right */}
          <div className="flex items-center gap-5 text-base font-norma">
            <a href="tel:08889909734" className="text-white"> 08889909734</a>
            <a href="tel:09425063976" className="text-white"> 09425063976</a>
            <a href="mailto:info@luckyspharmalab.com">
              ✉️ info@luckyspharmalab.com
            </a>

            {/* Social */}
            <div className="flex gap-3 text-lg">
              <a href="#" className="hover:opacity-80">ⓕ</a>
              <a href="#" className="hover:opacity-80">𝕏</a>
              <a href="#" className="hover:opacity-80">▶</a>
              <a href="#" className="hover:opacity-80">in</a>
              <a href="#" className="hover:opacity-80">Ⓟ</a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/luckpharm.png"
              alt="Lucky Pharma"
              width={120}
              height={60}
              priority
            />
          </Link>

          {/* MENU (DESKTOP) */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {[
              "Home",
              "About Us",
              "Product Range",
              "Divisions",
              "Facility",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-[#63a8b4] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT ICONS */}
          <div className="hidden md:flex items-center gap-5 text-xl text-gray-600">
            <button className="hover:text-[#63a8b4] transition">🔍</button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col px-6 py-4 gap-4 font-medium">
              {[
                "Home",
                "About Us",
                "Product Range",
                "Divisions",
                "Facility",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    onClick={() => setOpen(false)}
                    className="block py-2 border-b"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
