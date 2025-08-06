"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="mb-15 text-center">
      <motion.div 
        className="bg-[#31363F] mx-5 py-10 md:mx-115 md:pt-15 md:pb-20 rounded-4xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <motion.h4
          className="text-4xl mb-5 md:mb-10 md:text-5xl font-bold text-[#76ABAE]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in touch!
        </motion.h4>

        <motion.a
          href="mailto:dwiantoyan@gmail.com"
          className="inline-block px-5 py-3 md:px-8 md:py-4 bg-[#222831] text-[#EEEEEE] rounded-full hover:bg-[#EEEEEE] hover:text-[#222831] transition"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Click me!
        </motion.a>
      </motion.div>
    </section>
  );
}
