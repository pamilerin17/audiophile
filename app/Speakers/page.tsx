
import Four from '@/assets/4.png'
import Five from '@/assets/image-product.jpg'
import Image from 'next/image'
import Bring from '@/components/Bring/Bring'
import Category from '@/components/Category/Category'
import Link from 'next/link'

function page() {

 
  return (
    <div className='w-full'>
      <section className="bg-black py-20 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.3em] text-white">
          Speakers
        </h2>
      </section>

      <section className="px-6 md:px-24 py-28 bg-[#F1F1F1] rounded-xl overflow-hidden relative flex flex-col md:flex-row items-center gap-12">
  



    <div className="absolute w-[200px] h-[200px] md:w-[450px] md:h-[450px]  rounded-full opacity-40 -z-10"></div>

    {/* Speaker Image */}
    <Image
      src={Four}
      alt="ZX9 Speaker"
      className="relative w-[200px] md:w-[350px] object-contain z-10"
    />


  {/* Right: Text */}
  <div className="text-center md:text-left max-w-md flex flex-col gap-6">
    <p className="uppercase text-orange-500 md:text-orange-200 tracking-[0.5em]">New Product</p>
    <h1 className="uppercase font-bold text-4xl md:text-6xl text-white md:text-black tracking-wider">
      ZX9 <br /> Speaker
    </h1>
    <p className="text-black md:text-black leading-relaxed">
      Upgrade your sound system with the all new ZX9 active speaker. 
      It’s a bookshelf speaker system that offers truly wireless connectivity — 
      creating new possibilities for more pleasing and practical audio setups.
    </p>
    <Link href='/products/zx9'>
    <button className="uppercase bg-orange-500 text-white py-3 px-6 tracking-wider transition cursor-pointer">
      See Product
    </button>
    </Link>
  </div>
</section>

<section className="px-6 md:px-24 py-24">
  <div className=" rounded-xl flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">

    {/* Text */}
    <div className="text-center md:text-left max-w-md space-y-6">
      <h2 className="uppercase text-3xl font-bold tracking-widest">ZX7 <br /> Speaker</h2>
      <p className="text-gray-600 leading-relaxed">
        Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf 
        speaker uses high-end audiophile components that represent the top of the 
        line powered speakers for home or studio use.
      </p>
      <button className="uppercase  bg-orange-500 py-3 px-6 tracking-wider   transition">
        See Product
      </button>
    </div>

    {/* Image Right */}
    <div className="w-[250px] md:w-[350px] flex justify-center">
      <Image src={Five} alt="ZX7 Speaker" className="object-contain" />
    </div>

  </div>
</section>

<Category/>
<Bring/>
    </div>

    
  )
}

export default page
