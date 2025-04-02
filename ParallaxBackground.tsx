'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Abstract shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </motion.div>
    </div>
  );
}
