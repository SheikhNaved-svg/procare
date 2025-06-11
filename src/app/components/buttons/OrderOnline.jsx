'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function OrderOnline() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ backgroundColor: '#7A0000' }} // dark red
      animate={{
        backgroundColor: hovered ? '#AD0000' : '#800000', // lighter on hover
      }}
      transition={{ duration: 0.3 }}
      className="  text-[14px]  relative overflow-hidden text-[#FFFFFF] tracking-[0.18em] leading-[20px] px-4 py-3 font-bold  "
    >
      <div className="flex items-center gap-2 justify-center">
        ORDER ONLINE
      </div>
    </motion.button>
  );
}
