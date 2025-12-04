import { useState } from "react";
import Logo from "../constant/icons";
import { useMobile } from "../hooks/useMobile";

export default function Navbar() {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isMobile) {
    return (
      <nav className="w-full bg-[#0F0F0F] py-4">
        <div className="mx-auto px-4 flex items-center justify-between">
          {/* MOBILE LOGO */}
          <div className="flex items-center gap-1">
            <Logo />
            <span
              className="text-white text-[16px]"
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}
            >
              folkware
            </span>
          </div>

          {/* HAMBURGER MENU */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="bg-[#1a1a1a] border-t border-[#333] mt-4">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#"
                className="block text-white text-[16px] py-2"
                style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a
                href="#"
                className="block text-white text-[16px] py-2"
                style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </a>
              <a
                href="#"
                className="block text-white text-[16px] py-2"
                style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#"
                className="block text-white text-[16px] py-2"
                style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                STORIES
              </a>
              <a
                href="#"
                className="block text-white text-[16px] py-2"
                style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </a>
              <button
                className="w-full px-4 py-2 bg-white text-black text-[14px] font-semibold mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                SAY HI!
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  }

  // DESKTOP NAVBAR
  return (
    <nav className="w-full bg-[#0F0F0F] py-4">
      <div className=" mx-auto px-[65px] pt-10 flex items-center justify-between relative ">
        {/* LEFT NAV */}
        <ul
          className="hidden lg:flex items-center gap-10 text-white text-[24px] "
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
        >
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            SERVICES <span>▼</span>
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
          <Logo />
          <span
            className="text-white text-[24px] "
            style={{ fontFamily: '"popings", sans-serif', fontWeight: 700 }}
          >
            folkware
          </span>
        </div>

        {/* RIGHT NAV */}
        <div
          className="hidden lg:flex items-center gap-10 text-[24px] font-bebas text-white"
          style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
        >
          <a href="#">STORIES</a>
          <a href="#">ABOUT US</a>
          <button className="px-4 py-1 bg-white text-black text-[16px] font-semibold">
            SAY HI!
          </button>
        </div>
      </div>
    </nav>
  );
}
