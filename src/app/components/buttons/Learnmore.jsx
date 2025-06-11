'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LearnMoreButton() {
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
      className="  text-sm tracking-widest relative overflow-hidden md:mt-10 lg:mt-0 text-white ml-5 md:ml-0 px-8 py-3 text-[12px] font-bold "
    >
      <div className="flex items-center gap-2 justify-center">
        LEARN MORE
        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={hovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="inline-block"
        >
          &rsaquo; {/* or use › or an arrow icon */}
        </motion.span>
      </div>
    </motion.button>
  );
}
