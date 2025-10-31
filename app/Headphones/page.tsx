import Image from 'next/image'
import Pict from '@/assets/7.png'
import Pictt from '@/assets/image-product.jpg'
import Picttt from '@/assets/5.png'
import Pi from "@/assets/image-best-gear.jpg";

export default function HeadphonesPage() {
  return (
    <div className="w-full">

      {/* HERO TITLE */}
      <section className="bg-black py-20 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.3em] text-white">
          Headphones
        </h2>
      </section>

      {/* SECTION 1 */}
      <section className="px-6 md:px-24 py-24 grid md:grid-cols-2 items-center gap-12">
        
        {/* IMAGE LEFT */}
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-8">
          <Image
            src={Pict}
            alt="xx99 mark ii"
            className="w-[200px] md:w-[350px] object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-6 max-w-md">
          <p className="text-orange-500 uppercase tracking-[0.5em]">New Product</p>
          <h3 className="text-3xl md:text-5xl font-bold uppercase">XX99 Mark II Headphones</h3>
          <p className="text-gray-600">
            The pinnacle of pristine audio. These headphones redefine premium sound.
          </p>
          <button className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-600 transition">
            See Product
          </button>
        </div>
      </section>

      {/* SECTION 2 (image right) */}
      <section className="px-6 md:px-24 py-24 grid md:grid-cols-2 items-center gap-12">
        
        {/* TEXT FIRST (on desktop) */}
        <div className="flex flex-col gap-6 max-w-md md:order-1 order-2">
          <h3 className="text-3xl md:text-5xl font-bold uppercase">XX59 Headphones</h3>
          <p className="text-gray-600">
            Enjoy excellent sound without breaking the bank.
          </p>
          <button className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider  transition">
            See Product
          </button>
        </div>

        {/* IMAGE SECOND */}
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-8 md:order-2 order-1">
          <Image
            src={Picttt}
            alt="xx59"
            className="w-[200px] md:w-[350px] object-contain"
          />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="px-6 md:px-24 py-24 grid md:grid-cols-2 items-center gap-12">
        
        {/* IMAGE LEFT */}
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-8">
          <Image
            src={Pictt}
            alt="xx99 mark i"
            className="w-[200px] md:w-[350px] object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-6 max-w-md">
          <h3 className="text-3xl md:text-5xl font-bold uppercase">XX99 Mark I Headphones</h3>
          <p className="text-gray-600">
            Experience great audio quality and comfort at a friendly price.
          </p>
          <button className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-600 transition">
            See Product
          </button>
        </div>
      </section>


 <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold uppercase leading-snug">
            Bringing you the{" "}
            <span className="text-orange-500">best</span> audio gear
          </h3>

          <h2 className="text-gray-600 leading-relaxed text-base md:text-lg">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </h2>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={Pi}
            alt="Best Audio Gear"
            className="rounded-xl object-cover w-full max-w-md"
          />
        </div>

      </div>
    </section>
    </div>
  )
}
