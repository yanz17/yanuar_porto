"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col gap-5 px-5 md:px-25 py-40">
      <motion.div
        className="text-6xl md:text-8xl font-semibold text-[#76ABAE]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1>Hello,</h1>
        <h1>I am Yanuar</h1>
      </motion.div>

      <motion.p
        className="text-lg md:text-2xl font-medium max-w-2xl text-[#EEEEEE]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A frontend web developer passionate about building functional and user-friendly web applications.
      </motion.p>
    </section>
  );
}
