import Image from "next/image";
import Link from "next/link";
import Pic from "@/assets/2.png";

export default function Hero() {
  return (
    <section className="w-full bg-black text-white mb-10">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center md:items-center">
        
        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
          <p className="uppercase tracking-[0.5em] text-gray-400 text-xs mb-4">
            New Product
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            XX99 MARK II <br /> HEADPHONES
          </h1>

          <p className="text-gray-300 mb-10 max-w-sm mx-auto md:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link
            href="/products/xx99-mark-two"
            className="bg-primary bg-[#FBAF85] transition text-white px-6 py-3 uppercase tracking-wide text-sm"
          >
            See Product
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={Pic} 
            alt="XX99 Headphones"
            width={700}
            height={700}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
