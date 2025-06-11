import React from 'react'
import Image from 'next/image';
import LearnMoreButton from '../buttons/Learnmore';
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(/herobackground.svg)", minHeight: "300px" }}
      className=" h-[691px] md:h-[421px] lg:h-[691px] flex justify-center lg:px-36 md:mt-[87px] lg:mt-[100px]  max-md:h-full w-full bg-cover bg-center "
    >
    <div className='w-full max-w-screen-xl flex flex-col-reverse md:flex-row mt-10 md:mt-0 lg:mt-10'>
    {/*left container*/}
    <div className='w-full mt-7 md:mt-0 flex flex-col-reverse md:flex-col items-start md:items-end lg:w-[50%]'>
        <Image className='w-full mt-10 md:w-[329px] md:h-[239px] lg:w-[693px] lg:h-[502px]' src="/heroimage.svg" alt='image' width={100} height={100} />
         <LearnMoreButton/>
         {/* Button 
          <button className="bg-[#7A0000] md:mt-10 lg:mt-0 text-white ml-5 md:ml-0 px-8 py-3 text-[12px] font-bold hover:bg-[#5c0c0c]">
            LEARN MORE
          </button>*/}
    </div>
    {/*right container*/}
    <div className='w-full px-5 md:px-0 flex flex-col gap-10 md:pl-10 lg:pl-20 pt-20  md:pt-10 lg:w-[50%]'>
        {/*text*/}
        <div className='w-full'>
        <h3 className="text-[14px] md:text-[16px] font-semibold leading-[100%] text-[#8E110F]  mb-5">
          our promise
        </h3>
        <h1 className="text-[36px]  lg:text-[54px] font-semibold leading-[100%] text-[#414143] mb-10">
          Unparalleled <br />
          customer service
        </h1>
        <p className="md:text-[16px] text-[14px] leading-[150%] text-[#414141] tracking-[-0.015em]">
          ProCare is the largest privately held transportation and language services provider. 
          We take great pride in delivering unparalleled customer service and providing injured 
          workers with prompt, reliable and professional service always.
        </p>
        </div>
        {/*images*/}
        <div className='w-full  z-10 relative'>
            <Image
            className='absolute w-[80%] md:w-[50%] lg:w-[80%] right-0 hidden md:block'
             src='/heroimage2.svg' alt='image2' width={100} height={100} />
             <Image
            className='absolute left-[110%]  hidden lg:block'
             src='/heroimage3.svg' alt='image2' width={40} height={100} />
        </div>

    </div>
    </div>
    </div>
  )
}

export default Hero;
