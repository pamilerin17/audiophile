'use client'

import Image from "next/image";
import Link from "next/link";
import { useCart } from '@/app/context/CartContext';
import i from '@/assets/assets/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import ii from '@/assets/assets/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import iii from '@/assets/image-gallery-1.jpg'
import Four from '@/assets/4.png'
import Picttt from '@/assets/image-category-page-preview.jpg'
import Pictt from '@/assets/5.png'
import Category from '@/components/Category/Category'
import Bring from '@/components/Bring/Bring'

export default function Page() {
 const { addToCart } = useCart();

 const product = {
   id: "xx99-mk2",
   name: "XX99 Mark I Headphones",
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
         <Image src={Pictt} alt="xx99 mark ii" className="w-[250px] md:w-[400px]" />
       </div>

       <div className="flex flex-col gap-5 max-w-md">

         <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
           XX99 Mark I <br /> Headphones
         </h2>

         <p className="text-gray-600">
         As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. 
         </p>

         <p className="text-xl font-bold">$ 1,750</p>

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
   As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.


   </p>
   <p className="text-gray-600 leading-7">
   From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
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