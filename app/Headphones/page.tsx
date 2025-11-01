import Image from 'next/image'
import Link from 'next/link'
import Pict from '@/assets/7.png'
import Pictt from '@/assets/5.png'
import Picttt from '@/assets/image-category-page-preview.jpg'
import Bring from '@/components/Bring/Bring'
import Category from '@/components/Category/Category'

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
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-8">
          <Image src={Pict} alt="xx99 mark ii" className="w-[200px] md:w-[350px] object-contain" />
        </div>

        <div className="flex flex-col gap-6 max-w-md">
          <p className="text-orange-500 uppercase tracking-[0.5em]">New Product</p>
          <h3 className="text-3xl md:text-5xl font-bold uppercase">XX99 Mark II Headphones</h3>
          <p className="text-gray-600">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
          </p>

          <Link href="/products/xx99-mark-two">
            <button className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition cursor-pointer">
              See Product
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-6 md:px-24 py-24 grid md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6 max-w-md md:order-1 order-2">
          <h3 className="text-3xl md:text-5xl font-bold uppercase">XX99 I Headphones </h3>
          <p className="text-gray-600">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>

          <Link href="/products/xx59-mark-one">
            <button className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition cursor-pointer">
              See Product
            </button>
          </Link>
        </div>

        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-8 md:order-2 order-1">
          <Image src={Pictt} alt="xx59" className="w-[200px] md:w-[350px] object-contain" />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="px-6 md:px-24 py-24 grid md:grid-cols-2 items-center gap-12">
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center py-8">
          <Image src={Picttt} alt="xx99 mark i" className="w-[200px] md:w-[350px] object-contain" />
        </div>

        <div className="flex flex-col gap-6 max-w-md">
          <h3 className="text-3xl md:text-5xl font-bold uppercase">XX59 Mark Headphones</h3>
          <p className="text-gray-600">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>

          <Link href="/products/xx59">
            <button className="bg-orange-600 text-white py-3 px-8 uppercase tracking-wider hover:bg-orange-700 transition cursor-pointer">
              See Product
            </button>
          </Link>
        </div>
      </section>

      <Category />
      <Bring />
    </div>
  )
}
