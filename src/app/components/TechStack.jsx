"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TechStack({ stacks }) {
  return (
    <section className="py-20">
      <motion.h2
        className="text-5xl font-bold text-center text-[#76ABAE] mb-25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-25 my-25 place-items-center">
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Image src={stack.logo} alt={stack.name} width={75} height={75} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
