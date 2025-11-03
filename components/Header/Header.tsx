"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white px-6 py-5 fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex items-center justify-between md:justify-center max-w-7xl mx-auto relative">

        {/* LOGO */}
        <div className="flex-1 md:flex-none">
          <h1 className="text-2xl font-bold tracking-widest lowercase">audiophile</h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm uppercase tracking-wider">
          <Link href="/">Home</Link>
          <Link href="/Headphones">Headphones</Link>
          <Link href="/Speakers">Speakers</Link>
          <Link href="/Earphones">Earphones</Link>
        </nav>

        {/* CART + HAMBURGER */}
        <div className="flex-1 md:flex-none flex justify-end items-center gap-4 relative">
          {/* Cart icon linking to checkout */}
          <Link href="/Checkout" className="relative text-2xl cursor-pointer hover:text-orange-500">
            <CiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-3xl cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black py-6 flex flex-col gap-6 text-center text-sm uppercase tracking-wider border-t border-gray-800 z-40">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/Headphones" onClick={() => setMenuOpen(false)}>Headphones</Link>
          <Link href="/Speakers" onClick={() => setMenuOpen(false)}>Speakers</Link>
          <Link href="/Earphones" onClick={() => setMenuOpen(false)}>Earphones</Link>
        </div>
      )}
    </header>
  );
}
