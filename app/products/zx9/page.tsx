'use client'

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

import Four from '@/assets/assets/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import Picttt from '@/assets/image-category-page-preview.jpg';
import Pictt from '@/assets/5.png';
import Gallery1 from "@/assets/assets/assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import Gallery2 from "@/assets/assets/assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import Gallery3 from "@/assets/assets/assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

import Category from '@/components/Category/Category';
import Bring from '@/components/Bring/Bring';

export default function Zx9SpeakerPage() {
  const { items, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const product = {
    id: "zx9",
    name: "ZX9 Speaker",
    price: 4500,
    quantity: 1,
    image: "/images/cart/image-zx9.jpg",
  };

  return (
    <div className="px-6 md:px-24 py-20 space-y-24">

      {/* ✅ Back link */}
      <Link href="/Speakers" className="text-gray-500 hover:text-black">
        Go Back
      </Link>

      {/* ✅ Product Header Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        {/* Product Image */}
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-16">
          <Image src={Four} alt="ZX9 Speaker" className="w-[300px] md:w-[450px]" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 max-w-md">
          <p className="text-orange-500 uppercase tracking-[0.3em]">New Product</p>

          <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
            ZX9 <br /> Speaker
          </h2>

          <p className="text-gray-600">
            Upgrade your sound system with the all-new ZX9 active speaker.
            It’s a bookshelf speaker system that offers truly wireless connectivity —
            creating new possibilities for more pleasing and practical audio setups.
          </p>

          <p className="text-xl font-bold">$ {product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
          >
            Add To Cart
          </button>

          {/* CART ITEMS DISPLAY */}
          {items.length > 0 && (
            <div className="mt-6 flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 items-center">
                  <p className="flex-1">{item.name}</p>
                  <p>${item.price}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ✅ Features & In The Box */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
          <p className="text-gray-600 leading-relaxed">
            Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved Bluetooth technology offers near lossless audio quality at up to 328ft (100m).

            Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">In The Box</h3>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-orange-600 font-bold">2x</span>
              <span className="text-gray-600">Speaker Unit</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-600 font-bold">2x</span>
              <span className="text-gray-600">Speaker Cloth Panel</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-600 font-bold">1x</span>
              <span className="text-gray-600">User Manual</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-600 font-bold">1x</span>
              <span className="text-gray-600">3.5mm Audio Cable</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ✅ Gallery Section */}
      <section className="mt-24 grid md:grid-cols-2 gap-6">
        <div className="grid gap-6">
          <Image
            src={Gallery1}
            alt="Gallery"
            className="rounded-lg object-cover w-full h-[200px] md:h-[280px]"
          />
          <Image
            src={Gallery2}
            alt="Gallery"
            className="rounded-lg object-cover w-full h-[200px] md:h-[280px]"
          />
        </div>
        <div>
          <Image
            src={Gallery3}
            alt="Gallery"
            className="rounded-lg object-cover w-full h-[430px] md:h-[580px]"
          />
        </div>
      </section>

      {/* ✅ You May Also Like */}
      <section className="text-center space-y-10">
        <h3 className="text-2xl uppercase font-bold">You May Also Like</h3>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Like Item 1 */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#F1F1F1] rounded-lg py-10 w-full">
              <Image src={Pictt} alt="ZX7 Speaker" className="mx-auto w-[180px]" />
            </div>
            <p className="text-lg font-bold uppercase">ZX7 Speaker</p>
            <Link
              href="/products/zx7-speaker"
              className="bg-orange-600 text-white py-2 px-8 uppercase text-sm hover:bg-orange-700"
            >
              See Product
            </Link>
          </div>

          {/* Like Item 2 */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#F1F1F1] rounded-lg py-10 w-full">
              <Image src={Picttt} alt="XX99 Mark II" className="mx-auto w-[180px]" />
            </div>
            <p className="text-lg font-bold uppercase">XX99 Mark II</p>
            <Link
              href="/products/xx99-mark-two"
              className="bg-orange-600 text-white py-2 px-8 uppercase text-sm hover:bg-orange-700"
            >
              See Product
            </Link>
          </div>

          {/* Like Item 3 */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#F1F1F1] rounded-lg py-10 w-full">
              <Image src={Four} alt="XX99 Mark I" className="mx-auto w-[180px]" />
            </div>
            <p className="text-lg font-bold uppercase">XX99 Mark I</p>
            <Link
              href="/products/xx99-mark-one"
              className="bg-orange-600 text-white py-2 px-8 uppercase text-sm hover:bg-orange-700"
            >
              See Product
            </Link>
          </div>

        </div>
      </section>

      <Category />
      <Bring />

    </div>
  );
}
