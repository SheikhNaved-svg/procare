'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const solutions = [
  {
    title: 'TRANSPORTATION',
    img: '/pic1.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'INTERPRETATION',
    img: '/pic2.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'TRAVEL & CONCIERGE',
    img: '/pic3.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'DME SOLUTIONS',
    img: '/pic4.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'HOME HEALTH',
    img: '/pic5.svg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function Aresolution() {
  return (
    <div className='flex justify-center'>
    <section className="px-4 lg:px-10 xl:px-20 max-w-screen-2xl mt-[400px] md:mt-[300px] lg:mt-[350px]">
      <p className="text-[#8E110F] leading-[100%] font-semibold text-[14px] md:text-[16px]  mb-5 uppercase tracking-wide">our solutions</p>
      <h2 className="text-[36px] lg:text-[54px] text-[#414143] leading-[100%] font-semibold  mb-16">Consider it done</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
         {solutions.map((item, index) => (
          <motion.div
            key={index}
            className="group bg-white  cursor-pointer rounded overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="">
              <h3 className="font-semibold text-[#414143] leading-[100%] mt-7 text-[18px]">{item.title}</h3>
              <p className="text-sm leading-[140%] text-[#414143] tracking-[-1.5%] mt-4 mb-4">{item.desc}</p>
              <div className="flex gap-2 items-center">
                <a href="#" className="text-[#8F0D00] font-semibold text-[12px]">
                  READ MORE
                </a>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="group-hover:translate-x-1"
                >
                  <Image src="/rightarrow.svg" alt="arrow" width={15} height={15} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
}
