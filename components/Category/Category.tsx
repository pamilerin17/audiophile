import Image from "next/image";
import Link from "next/link";
import Pic1 from "@/assets/3.png";
import Pic2 from "@/assets/4.png";
import Pic3 from "@/assets/5.png";


export default function CategorySection() {
  const categories = [
    {
      name: "Headphones",
      image: Pic3,
      link: "/headphones",
    },
    {
      name: "Speakers",
      image: Pic2,
      link: "/speakers",
    },
    {
      name: "Earphones",
      image: Pic1,
      link: "/earphones",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center text-black">
            {/* FLOATING IMAGE */}
            <Image
              src={cat.image}
              alt={cat.name}
              width={140}
              height={140}
              className="relative z-10 -mb-8 object-contain"
            />

            {/* BOTTOM GRAY BOX */}
            <div className="bg-gray-100 rounded-lg pt-12 pb-6 w-full flex flex-col items-center">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
                {cat.name}
              </h3>

              <Link
                href={cat.link}
                className="text-sm text-gray-500 uppercase tracking-wider hover:text-primary flex items-center gap-1"
              >
                Shop <span className="text-primary">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
