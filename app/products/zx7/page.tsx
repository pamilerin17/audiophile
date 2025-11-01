"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import Four from '@/assets/4.png'
import Picttt from '@/assets/image-category-page-preview.jpg'
import Pictt from '@/assets/5.png'
import Category from '@/components/Category/Category'
import Bring from '@/components/Bring/Bring'
import Five from '@/assets/image-product.jpg'
import Gal from '@/assets/assets/assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import Gall from '@/assets/assets/assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import Galll from '@/assets/image-gallery-3.jpg'

export default function Zx7SpeakerPage() {
  const { addToCart } = useCart();

  const product = {
   id: "1",
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
          <Image src={Five} alt="ZX9 Speaker" className="w-[300px] md:w-[450px]" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 max-w-md">
          

          <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
            ZX7 <br /> Speaker
          </h2>

          <p className="text-gray-600">
            Upgrade your sound system with the all-new ZX9 active speaker.
            It’s a bookshelf speaker system that offers truly wireless connectivity —
            creating new possibilities for more pleasing and practical audio setups.
          </p>

          <p className="text-xl font-bold">$ 1,850</p>

          <button
             onClick={() => addToCart(product)}
            className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
          >
            Add To Cart
          </button>
        </div>
      </section>


      {/* ✅ Features Section */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
          <p className="text-gray-600 leading-relaxed">
          Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
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
  {/* LEFT SIDE (2 stacked images) */}
  <div className="grid gap-6">
    <Image
      src={Gal}
      alt="Gallery"
      className="rounded-lg object-cover w-full h-[200px] md:h-[280px]"
    />
    <Image
      src={Gall}
      alt="Gallery"
      className="rounded-lg object-cover w-full h-[200px] md:h-[280px]"
    />
  </div>

  {/* RIGHT SIDE (full height image) */}
  <div>
    <Image
      src={Galll}
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
              <Image src={Pictt} alt="Another product" className="mx-auto w-[180px]" />
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
              <Image src={Picttt} alt="Another product" className="mx-auto w-[180px]" />
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
              <Image src={Four} alt="Another product" className="mx-auto w-[180px]" />
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
      <Category/>
      <Bring/>

    </div>
  );
}
