'use client'

import Image from "next/image";
import Link from "next/link";
import { useCart } from '@/app/context/CartContext';

import i from '@/assets/assets/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import ii from '@/assets/assets/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import iii from '@/assets/image-gallery-1.jpg'
import Four from '@/assets/image-product.jpg';
import Picttt from '@/assets/image-category-page-preview.jpg';
import Pictt from '@/assets/5.png';

import Category from '@/components/Category/Category';
import Bring from '@/components/Bring/Bring';

export default function Page() {
  const { items, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const product = {
    id: "xx99",
    name: "XX99 Headphones",
    price: 1450,
    quantity: 1,
    Image: Pictt
  };

  return (
    <div className="px-6 md:px-24 py-20">
      <Link href="/Headphones" className="text-gray-500 hover:text-black">
        Go Back
      </Link>

      {/* MAIN PRODUCT SECTION */}
      <section className="mt-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-12">
          <Image src={Pictt} alt="XX59 headphones" className="w-[250px] md:w-[400px]" />
        </div>

        <div className="flex flex-col gap-5 max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
            XX99 <br /> Headphones 1
          </h2>

          <p className="text-gray-600">
            Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
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

      {/* FEATURES & IN THE BOX */}
      <section className="mt-28 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
          <p className="text-gray-600 leading-7 mb-5">
            These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
          </p>
          <p className="text-gray-600 leading-7">
            More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
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

      {/* PRODUCT GALLERY */}
      <section className="mt-28 grid md:grid-cols-2 gap-6">

{/* LEFT SIDE — TWO STACKED IMAGES */}
<div className="grid gap-6">
  <div className="rounded-lg overflow-hidden">
    <Image
      src={iii}
      alt="XX99 Mark II gallery image 1"
      width={400}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="rounded-lg overflow-hidden">
    <Image
      src={i}
      alt="XX99 Mark II gallery image 2"
      width={400}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>
</div>

{/* RIGHT SIDE — LARGE IMAGE */}
<div className="rounded-lg overflow-hidden">
  <Image
    src={ii}
    alt="XX99 Mark II gallery image 3"
    width={700}
    height={900}
    className="w-full h-full object-cover"
  />
</div>

</section>

      {/* YOU MAY ALSO LIKE */}
      <section className="mt-32 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
          You May Also Like
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {/* XX99 Mark I */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
              <Image src={Pictt} alt="XX99 Mark I" className="object-contain" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide">XX99 Mark I</h3>
            <Link
              href="/products/xx99-mark-one"
              className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
            >
              See Product
            </Link>
          </div>

          {/* XX59 */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
              <Image src={Picttt} alt="XX59" className="object-contain" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide">XX59</h3>
            <Link
              href="/products/xx59"
              className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
            >
              See Product
            </Link>
          </div>

          {/* YX1 Earphones */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
              <Image src={Four} alt="YX1 Earphones" className="object-contain" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide">YX1 Earphones</h3>
            <Link
              href="/products/yx1-earphones"
              className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
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
