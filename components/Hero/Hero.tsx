// app/components/ProductsSection.tsx
import Image from "next/image";
import Pics from '@/assets/assets/assets/product-zx9-speaker/desktop/image-product.jpg'
import Picss from '@/assets/image-gallery-3.jpg'
import Picsss from '@/assets/image-gallery-2.jpg'
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-8">

      {/* ZX9 Speaker */}
      <div className="bg-orange-200 rounded-xl flex flex-col md:flex-row items-center p-10 md:p-16 text-white">
        <div className="flex-1 flex justify-center mb-10 md:mb-0">
          <Image
            src={Pics}
            width={300}
            height={300}
            alt="ZX9 Speaker"
            className="object-contain"
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest">
            ZX9 Speaker
          </h2>
          <p className="opacity-80 leading-relaxed">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href='/products/zx9'>
          <button className="bg-black text-white uppercase tracking-wider px-6 py-3 rounded-md cursor-pointer">
            See Product
          </button>
          </Link>
        </div>
      </div>

  {/* ZX7 Speaker */}
<div className="bg-gray-200 rounded-xl p-8 md:p-12 min-h-[230px] flex flex-col md:flex-row items-center md:justify-between">
  
  {/* Text */}
  <div className="space-y-4 md:space-y-6 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-black">
      ZX7 Speaker
    </h2>
    <Link href='/products/zx7'>
    <button className="border border-black uppercase tracking-wider px-6 py-3 rounded-md text-black cursor-pointer">
      See Product
    </button>
    </Link>
  </div>

  {/* Image on Right */}
  <div className="mt-6 md:mt-0 w-[200px] md:w-[300px]">
    <Image
      src={Picss}
      width={300}
      height={300}
      alt="ZX7 Speaker"
      className="object-contain"
    />
  </div>
</div>



      {/* YX1 Earphones */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={Picsss}
            width={600}
            height={400}
            alt="YX1 Earphones"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-gray-200 rounded-xl flex items-center p-10 min-h-[250px]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-black">
              YX1 Earphones
            </h2>
            <Link href='/products/yx1'>
            <button className="cursor-pointer border border-black uppercase tracking-wider px-6 py-3 rounded-md text-black">
              See Product
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
