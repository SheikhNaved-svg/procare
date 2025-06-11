'use client';

import Image from 'next/image';

export default function CareerSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text + Border box */}
        <div>
        <div className="relative z-10 bg-white p-8 border border-gray-300 max-w-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Where will your career take you?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo. Ut labore et dolore magna aliqua. Ut enim ad.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#8F0D00] hover:bg-[#a01100] transition-all text-white px-6 py-3 uppercase text-sm tracking-wider font-semibold">
              Benefits
            </button>
            <button className="bg-[#4A4A4A] hover:bg-[#333] transition-all text-white px-6 py-3 uppercase text-sm tracking-wider font-semibold">
              Career Options
            </button>
          </div>
        </div>
        </div>

        {/* Image - slightly overlapping */}
        <div className="">
          <Image
            src="/homecareer.svg"
            alt="Career"
            width={100}
            height={100}
            className="rounded-sm shadow-md w-full max-w-xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
