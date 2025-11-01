import Image from 'next/image'
import Ear from '@/assets/3.png'
import Bring from '@/components/Bring/Bring'
import Category from '@/components/Category/Category'
import Link from 'next/link'

function Earphones() {
  return (
    <div className='w-full'>
       <section className="bg-black py-20 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.3em] text-white">
          Earphones
        </h2>
      </section>

      <section className="px-6 md:px-24 py-24">
  <div className="bg-[#FAFAFA] rounded-xl flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10">

    {/* Image LEFT */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src={Ear}
        alt="YX1 Earphones"
        className="rounded-xl object-cover w-[260px] md:w-[400px]"
      />
    </div>

    {/* TEXT RIGHT */}
    <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
      <p className="uppercase tracking-[0.4em] text-orange-500">New Product</p>

      <h1 className="uppercase font-extrabold text-3xl md:text-5xl tracking-wider leading-tight">
        YX1 Wireless <br /> Earphones
      </h1>

      <h2 className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
        Tailor your listening experience with bespoke dynamic drivers from the
        new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
        in noisy environments with its active noise cancellation feature.
      </h2>
      <Link href='/products/yx1'>
      <button className="uppercase bg-orange-500 text-white py-3 px-8 tracking-wider w-fit mx-auto md:mx-0  transition cursor-pointer">
        See Product
      </button>
      </Link>
    </div>

  </div>
</section>

<Category/>
<Bring/>

    </div>
  )
}

export default Earphones
