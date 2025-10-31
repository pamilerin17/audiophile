import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const AudiophileFooter = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SECTION */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase">
              audiophile
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a
              small team of music lovers and sound specialists who are devoted to
              helping you get the most out of personal audio. Come and visit our demo
              facility – we&apos;re open 7 days a week.
            </p>

            <p className="text-gray-500 text-sm pt-6">
              Copyright 2021. All Rights Reserved
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center md:items-end space-y-8 w-full">

            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
              {["Home", "Headphones", "Speakers", "Earphones"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium tracking-widest uppercase text-gray-300 hover:text-orange-500 transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center md:justify-end pt-4 mr-50">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-orange-500 transition transform hover:scale-110 cursor-pointer"
    aria-label="Facebook"
  >
    <FaFacebookSquare size={26} />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-orange-500 transition transform hover:scale-110 cursor-pointer"
    aria-label="Twitter"
  >
    <FaTwitter size={26} />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-orange-500 transition transform hover:scale-110 cursor-pointer"
    aria-label="Instagram"
  >
    <FaInstagram size={26} />
  </a>
</div>

          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
    </footer>
  );
};

export default AudiophileFooter;
