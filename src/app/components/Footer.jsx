"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer({ socials }) {
  return (
    <footer className="py-10 bg-[#222831] text-center">
      <motion.p
        className="mb-6 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <q>Himmel the hero would have done the same</q>
      </motion.p>

      <div className="flex justify-center gap-6 mb-4">
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Image src={social.logo} alt={social.name} width={30} height={30} />
          </motion.a>
        ))}
      </div>

      <p className="text-gray-400 text-sm">&copy; 2025 yanuar</p>
    </footer>
  );
}
