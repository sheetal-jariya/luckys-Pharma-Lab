"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// React Icons
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">

      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-[#63a8b4] text-white text-[12px] sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">

          {/* Left */}
          <marquee className="w-full md:w-1/2">
            Do not post Job, raw material & personal enquiries.
          </marquee>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-5">

            <a href="tel:08889909734" className="flex items-center gap-2 hover:opacity-90">
              <FaPhoneAlt className="text-[13px]" />
              <span>08889909734</span>
            </a>

            <a href="tel:09425063976" className="flex items-center gap-2 hover:opacity-90">
              <FaPhoneAlt className="text-[13px]" />
              <span>09425063976</span>
            </a>

            <a
              href="mailto:info@luckyspharmalab.com"
              className="flex items-center gap-2 hover:opacity-90"
            >
              <FaEnvelope className="text-[14px]" />
              <span>info@luckyspharmalab.com</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-[14px]">
              <a href="#" className="hover:opacity-80"><FaFacebookF /></a>
              <a href="#" className="hover:opacity-80"><FaTwitter /></a>
              <a href="#" className="hover:opacity-80"><FaYoutube /></a>
              <a href="#" className="hover:opacity-80"><FaLinkedinIn /></a>
              <a href="#" className="hover:opacity-80"><FaPinterestP /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/luckpharm.png"
              alt="Lucky Pharma"
              width={120}
              height={55}
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
                  className="hover:text-[#63a8b4] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* SEARCH ICON */}
          <div className="hidden md:flex text-gray-600 text-lg cursor-pointer hover:text-[#63a8b4]">
            <FaSearch />
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

