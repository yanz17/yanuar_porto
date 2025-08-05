"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center px-10 py-5 bg-transparent text-[#EEEEEE]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-xl font-bold">yanuar</div>
      <button className="p-2 hover:bg-[#222831] rounded-lg transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
             className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </motion.nav>
  );
}
