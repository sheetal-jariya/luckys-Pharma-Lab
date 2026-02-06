"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5a9db3] text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Section */}
          <div>
            <Image
              src="/luckpharm.png"
              alt="Luckys Pharma"
              width={180}
              height={80}
              className="mb-6"
            />
            <p className="text-sm leading-6 mb-4">
              We have been widely appreciated by our clients as a dependable
              business partner, guiding them in consumer markets with expertise
              and tenacity.
            </p>
            <Link
              href="/blogs"
              className="text-sm underline hover:text-gray-200"
            >
              Blogs
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about-us" },
                { name: "Product Range", link: "/product-range" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Contact Us", link: "/contact-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="block bg-[#4c8fa6] px-4 py-2 rounded hover:bg-[#437f93] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-6">OUR ADDRESS</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  119, Kalyanam Skyz, 9 North Tukoganj, Indore, Madhya Pradesh.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt /> 08889909734
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt /> 08889909733
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt /> 09425063976
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope /> info@luckyspharmalab.com
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.webhopers.luckypharma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            All rights reserved. © 2020 Luckys Pharma | Developed By{" "}
            <a
              href="https://www.webhopers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              <span className="text-blue-800">Web</span>
              <span className="text-orange-500">Hopers</span>
            </a>
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
