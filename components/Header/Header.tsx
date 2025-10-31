"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white px-6 py-5 fixed top-0 left-0 z-50 shadow-lg">
      {/* CONTAINER */}
      <div className="flex items-center justify-between md:justify-center max-w-7xl mx-auto">
        
        {/* LEFT — Logo */}
        <div className="flex-1 md:flex-none">
          <h1 className="text-2xl font-bold tracking-widest lowercase">
            audiophile
          </h1>
        </div>

        {/* CENTER — Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm uppercase tracking-wider">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/Headphones" className="hover:text-orange-500">Headphones</Link>
          <Link href="/speakers" className="hover:text-orange-500">Speakers</Link>
          <Link href="/earphones" className="hover:text-orange-500">Earphones</Link>
        </nav>

        {/* RIGHT — Cart + Menu */}
        <div className="flex-1 md:flex-none flex justify-end items-center gap-4">
          <div className="text-2xl cursor-pointer hover:text-orange-500">
            <CiShoppingCart />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN NAV */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black py-6 flex flex-col gap-6 text-center text-sm uppercase tracking-wider z-40 border-t border-gray-800">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Home</Link>
          <Link href="/headphones" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Headphones</Link>
          <Link href="/speakers" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Speakers</Link>
          <Link href="/earphones" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">Earphones</Link>
        </div>
      )}
    </header>
  );
}
