"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TechStack({ stacks }) {
  const [order, setOrder] = useState(stacks);

  // Shuffle posisi tiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => shuffle(prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <motion.h2
        className="text-5xl font-bold text-center text-[#76ABAE] mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <motion.ul
        layout
        className="flex flex-wrap justify-center gap-10 mt-25 mb-15"
      >
        {order.map((stack, i) => (
          <motion.li
            key={stack.name}
            layout
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            className="flex justify-center items-center w-24 h-24 rounded-xl bg-transparent"
          >
            <Image
              src={stack.logo}
              alt={stack.name}
              width={75}
              height={75}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

/**
 * Utils: Random shuffle array
 */
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
