import Image from "next/image";
import Pi from "@/assets/image-best-gear.jpg";

function Bring() {
  return (
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
  );
}

export default Bring;
