'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OrderOnline from './buttons/OrderOnline';
export default function Navbar() {
  const navLinks = ["SOLUTIONS", "PROVIDERS", "ABOUT US", "CONTACT", "GET QUOTE"];
  return (
    <header className="w-full bg-[#FFFFFF] py-8 shadow-sm fixed top-0 z-20">
      <div className=" px-5 lg:px-20 xl:px-40 flex items-center justify-between">
        {/* Logo */}
          <Image className='w-[124px] h-[24px] lg:h-[40]' src="/logo.svg" alt="ProCare Logo" width={100} height={100} />

          <div className='hidden lg:flex gap-10 items-center'>
        {/* Nav Links */}
        <nav className="md:flex gap-5 text-[#434343] leading-[180%] tracking-[0.26em]
 font-semibold text-[12px]">
      {navLinks.map((text, index) => (
        <motion.div
          key={index}
          whileHover={{ color: '#757575'}}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Link href="#">{text}</Link>
        </motion.div>
      ))}
    </nav>
        {/* Button
          <button className="bg-[#7A0000] text-white tracking-[0.18em] px-4 py-3 text-[14px] font-bold hover:bg-[#5c0c0c]">
            ORDER ONLINE
          </button>*/}
          <OrderOnline/>

          </div>
        
        {/*menu icon*/}
        <Image className='lg:hidden w-[24px] h-[24px]' src="/menuicon.svg" alt="ProCare Logo" width={100} height={100} />
      </div>
    </header>
  );
}
