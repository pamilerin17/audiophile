"use client";

import Image from "next/image";
import Link from "next/link";
import Pict from "@/assets/7.png";
import { useCart } from '@/app/context/CartContext';
import Pi from "@/assets/image-best-gear.jpg";
import Pii from '@/assets/image-gallery-2.jpg';
import Piii from '@/assets/2.png'
import Four from '@/assets/4.png'
import Picttt from '@/assets/image-category-page-preview.jpg'
import Pictt from '@/assets/5.png'
import Category from '@/components/Category/Category'
import Bring from '@/components/Bring/Bring'

export default function XX99MarkTwoPage() {
  const { addToCart } = useCart();

  const product = {
    id: "xx99-mk2",
    name: "XX99 Mark II Headphones",
    price: 3000,
    quantity: 1
  };

  return (
    <div className="px-6 md:px-24 py-20">
      <Link href="/Headphones" className="text-gray-500 hover:text-black">
        Go Back
      </Link>

      <section className="mt-10 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-12">
          <Image src={Pict} alt="xx99 mark ii" className="w-[250px] md:w-[400px]" />
        </div>

        <div className="flex flex-col gap-5 max-w-md">
          <p className="text-orange-500 uppercase tracking-[0.3em]">New Product</p>

          <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
            XX99 Mark II <br /> Headphones
          </h2>

          <p className="text-gray-600">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
          </p>

          <p className="text-xl font-bold">$ 3,000</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </section>

      {/* FEATURES & IN THE BOX */}
<section className="mt-28 grid md:grid-cols-2 gap-16">
  
  {/* FEATURES */}
  <div>
    <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
    <p className="text-gray-600 leading-7 mb-5">
      Featuring a genuine leather head strap and premium earcups, these headphones
      deliver outstanding comfort for long listening sessions. The advanced audio
      drivers reproduce studio-quality sound, making them perfect for professionals
      and audiophiles alike.
    </p>
    <p className="text-gray-600 leading-7">
      With intuitive controls and a lightweight build, the XX99 Mark II allows you to
      enjoy high-resolution audio while staying comfortable and connected.
    </p>
  </div>

  {/* IN THE BOX */}
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

{/* ✅ PRODUCT GALLERY */}
<section className="mt-28 grid md:grid-cols-2 gap-6">

  {/* LEFT SIDE — TWO STACKED IMAGES */}
  <div className="grid gap-6">
    <div className="rounded-lg overflow-hidden">
      <Image
        src={Pi}
        alt="XX99 Mark II gallery image 1"
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="rounded-lg overflow-hidden">
      <Image
        src={Pii}
        alt="XX99 Mark II gallery image 2"
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* RIGHT SIDE — LARGE IMAGE */}
  <div className="rounded-lg overflow-hidden">
    <Image
      src={Piii}
      alt="XX99 Mark II gallery image 3"
      width={700}
      height={900}
      className="w-full h-full object-cover"
    />
  </div>

</section>
{/* ✅ YOU MAY ALSO LIKE */}
<section className="mt-32 text-center">
  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
    You May Also Like
  </h2>

  <div className="mt-14 grid md:grid-cols-3 gap-8">

    {/* ITEM 1 */}
    <div className="flex flex-col items-center gap-6">
      <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
        <Image
          src={Pictt}
          alt="XX99 Mark I"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-bold uppercase tracking-wide">
        XX99 Mark I
      </h3>

      <Link
        href="/products/xx99-mark-one"
        className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
      >
        See Product
      </Link>
    </div>

    {/* ITEM 2 */}
    <div className="flex flex-col items-center gap-6">
      <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
        <Image
          src={Picttt}
          alt="XX59"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-bold uppercase tracking-wide">
        XX59
      </h3>

      <Link
        href="/products/xx59"
        className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
      >
        See Product
      </Link>
    </div>

    {/* ITEM 3 */}
    <div className="flex flex-col items-center gap-6">
      <div className="bg-[#F1F1F1] rounded-lg overflow-hidden w-full flex justify-center py-10">
        <Image
          src={Four}
          alt="YX1 Earphones"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-bold uppercase tracking-wide">
        YX1 Earphones
      </h3>

      <Link
        href="/products/yx1-earphones"
        className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition"
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
