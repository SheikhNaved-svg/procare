'use client';

import Image from 'next/image';

export default function UpcomingEvents() {
  return (
    <section className="w-full lg:flex py-20">
       <Image
          src="/upcoming.svg"
          alt="Event"
          width={100}
          height={100}
          className="lg:w-[50%]  w-full object-cover"
        />
        <div className='lg:w-[50%] w-full  relative'>
            <div className='w-full absolute left-[-70px] bg-white pb-10 pl-20 flex flex-col gap-5'>
              <h1 className='text-[#515151] text-[46px] font-semibold leading-[100%]'>Upcoming Events</h1>
              <p className='text-[14px] leading-[140%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>
            <div className='bg-[#F1ECE0] h-[300px] mt-[165px]'>
akdj
            </div>
            
        </div>
     
    </section>
  );
}
