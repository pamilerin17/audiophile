'use client'

import Image from "next/image";
import Link from "next/link";
import { useCart } from '@/app/context/CartContext';

import Earr from '@/assets/1.png';
import Earrr from '@/assets/11.png';
import Ea from '@/assets/10.png';
import Four from '@/assets/image-product.jpg';
import Picttt from '@/assets/image-category-page-preview.jpg';
import Pictt from '@/assets/5.png';
import Ear from '@/assets/3.png';

import Category from '@/components/Category/Category';
import Bring from '@/components/Bring/Bring';

export default function Yx1EarphonesPage() {
  const { items, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const product = {
    id: "yx1",
    name: "YX1 Earphones",
    price: 3000,
    quantity: 1,
    image: "/images/cart/image-yx1.jpg",
  };

  return (
    <div className="px-6 md:px-24 py-20">

      {/* Back link */}
      <Link href="/Earphones" className="text-gray-500 hover:text-black">
        Go Back
      </Link>

      {/* Product Section */}
      <section className="mt-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-12">
          <Image src={Ear} alt="YX1 Earphones" className="w-[250px] md:w-[400px]" />
        </div>

        <div className="flex flex-col gap-5 max-w-md">
          <p className="text-orange-500 uppercase tracking-[0.3em]">New Product</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
            YX1 <br /> Earphones
          </h2>

          <p className="text-gray-600">
            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
          </p>

          <p className="text-xl font-bold">$ {product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition cursor-pointer"
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

      {/* Features & In the Box */}
      <section className="mt-28 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
          <p className="text-gray-600 leading-7 mb-5">
            Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
          </p>
          <p className="text-gray-600 leading-7">
            The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">In The Box</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4">
              <span className="text-orange-600 font-bold">1x</span>
              <span className="text-gray-600">Headphone Unit</span>
            </li>
            <li className="flex gap-4">
              <span className="text-orange-600 font-bold">2x</span>
              <span className="text-gray-600">Replaceable Ear Cups</span>
            </li>
            <li className="flex gap-4">
              <span className="text-orange-600 font-bold">1x</span>
              <span className="text-gray-600">User Manual</span>
            </li>
            <li className="flex gap-4">
              <span className="text-orange-600 font-bold">1x</span>
              <span className="text-gray-600">3.5mm Audio Cable</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="mt-28 grid md:grid-cols-2 gap-6">
        <div className="grid gap-6">
          <Image
            src={Earrr}
            alt="YX1 gallery image 1"
            className="rounded-lg object-cover w-full h-[280px]"
          />
          <Image
            src={Earr}
            alt="YX1 gallery image 2"
            className="rounded-lg object-cover w-full h-[280px]"
          />
        </div>
        <div>
          <Image
            src={Ea}
            alt="YX1 gallery image 3"
            className="rounded-lg object-cover w-full h-[580px]"
          />
        </div>
      </section>

      {/* You May Also Like */}
      <section className="mt-32 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
          You May Also Like
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">

          {/* Item 1 */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
              <Image src={Pictt} alt="XX99 Mark I" width={300} height={300} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide">XX99 Mark I</h3>
            <Link href="/products/xx99-mark-one" className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition">
              See Product
            </Link>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
              <Image src={Picttt} alt="XX59" width={300} height={300} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide">XX59</h3>
            <Link href="/products/xx59" className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition">
              See Product
            </Link>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
              <Image src={Four} alt="YX1 Earphones" width={300} height={300} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide">YX1 Earphones</h3>
            <Link href="/products/yx1-earphones" className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition">
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
