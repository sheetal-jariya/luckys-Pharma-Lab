"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700 tracking-wide hover:scale-105 transition"
        >
          Lucky’s Pharma
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {menu.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative transition ${
                  pathname === item.href
                    ? "text-blue-700 after:w-full"
                    : "hover:text-blue-700"
                }
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-blue-700 after:transition-all after:w-0
                hover:after:w-full`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/contact"
              className="rounded-md bg-blue-700 px-5 py-2 text-white shadow
                         hover:bg-blue-800 hover:shadow-lg transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {menu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block font-medium ${
                    pathname === item.href
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-md bg-blue-700 px-4 py-2
                         text-white text-center"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
