"use client";

import Image from "next/image";
import PhotoProfile from "@/app/profile.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TestimonialsProps = {
  name: string;
  role: string;
  message: string;
};

const testimonials: TestimonialsProps[] = [
  {
    name: "Ian Pangestu",
    role: "Software Analyst At PT. Elnusa Tbk",
    message:
      "Raditya is a great developer. He has a good understanding of the project and always delivers on time.",
  },
  {
    name: "Rizky Kurniawan",
    role: "Software Engineer At PT. Elnusa Tbk",
    message:
      "Raditya is a loyal and hardworking developer. He is always willing to learn new things and is a great team player.",
  },
];

export default function Testimonials() {
  const [show, setShow] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isSelected = (index: number) => show === index;

  return (
    <section className="lg:min-h-screen px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center justify-center my-16">
      <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-400 mb-4 text-center md:text-left">
        Testimonials
      </h1>

      <p className="text-gray-400 text-mute mb-8 text-center w-80">
        People I've worked with have said some nice things...
      </p>

      <CardTestimonials {...testimonials[show]} key={show} />

      <div className="flex justify-center items-center mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${
              isSelected(index)
                ? "bg-gradient-to-r from-green-400 to-blue-400"
                : "bg-gray-400"
            }`}
            onClick={() => setShow(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}

function CardTestimonials(
  { name, role, message }: TestimonialsProps,
  index: number
) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      key={index}
      className={`text-center flex-col items-center flex`}
    >
      <Image
        src={PhotoProfile}
        alt="Profile Image"
        className="rounded-full w-20 h-20 mb-4"
      />

      <p className="text-lg text-center mb-4 p-4 w-full md:w-1/2">
        "{message}"
      </p>

      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-400 text-muted">{role}</p>
    </motion.div>
  );
}
