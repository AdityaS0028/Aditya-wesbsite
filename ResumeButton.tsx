'use client';

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResumeButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button 
        size="sm" 
        className="flex items-center gap-2"
        asChild
      >
        <Link href="/Aditya-Resume.PDF" target="_blank" download>
          <Download className="h-4 w-4" />
          Resume
        </Link>
      </Button>
    </motion.div>
  );
}
