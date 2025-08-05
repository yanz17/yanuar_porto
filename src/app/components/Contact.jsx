"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="mb-15 text-center">
      <motion.div 
        className="bg-[#222831] mx-80 pt-15 pb-25 rounded-4xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <motion.h4
          className="text-5xl font-bold mb-5 text-[#76ABAE]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in touch
        </motion.h4>

        <motion.a
          href="mailto:dwiantoyan@gmail.com"
          className="inline-block mt-8 px-8 py-4 bg-[#31363F] text-[#EEEEEE] rounded-full hover:bg-[#EEEEEE] hover:text-[#222831] transition"
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
