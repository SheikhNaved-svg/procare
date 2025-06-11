'use client';

import Image from 'next/image';

export default function UpcomingEvents() {
  return (
    <section className="w-full py-20">
      {/* Hero */}
      <div className="grid lg:grid-cols-2">
        <Image
          src="/upcoming.svg"
          alt="Event"
          width={1000}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="bg-white px-20 py-12">
          <h2 className="text-4xl font-bold text-[#333] mb-4">Upcoming Events</h2>
          <p className="text-[#555] leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
        </div>
      </div>

      {/* Event Highlight */}
      <div className="bg-[#F2ECE3] p-6 pl-20 lg:flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-[#333] mb-2">05.17.25 // RIMS Orlando</h3>
          <p className="font-semibold mb-2">
            IW and ProCare Connect Demo | 9:00 am - 12:30 pm | Room 1023
          </p>
          <p className="text-sm text-[#555] max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
        </div>
        <button className="bg-[#8F0D00] hover:bg-[#a01100] transition-all text-white px-6 py-3 uppercase tracking-widest font-bold mt-6 lg:mt-0">
          Register
        </button>
      </div>

      {/* Additional Events */}
      <div className="grid md:grid-cols-3 pl-20">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className={`p-6 ${index === 0 ? 'bg-[#DEDBD8]' : index === 1 ? 'bg-[#3F3F3F] text-white' : 'bg-black text-white'}`}>
            <h4 className="font-bold text-lg mb-1">Mauris Blandit Aliquet Ipsum</h4>
            <p className="text-sm font-semibold mb-2">5:30PM - 6:50PM, ROOM 102, FREE</p>
            <p className="text-sm mb-3">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a vestibulum
            </p>
            <a href="#" className="underline text-sm">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
}
