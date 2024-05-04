"use client";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import OrnamentCircle from "@/app/ornament-circle.svg";
import PhotoProfile from "@/app/profile.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-20 relative lg:min-h-screen flex items-center my-16">
      <Image
        src={OrnamentCircle}
        alt="Ornament Circle"
        className="absolute right-0 top-20 z-0"
      />

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full flex-col justify-center space-y-16 z-10"
      >
        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Hello, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Raditya Firman Syaputra
          </span>
          , <br />
          final year informatics engineering student
          <br />
          who passionate in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            software development
          </span>
          ,
          <br />
          willing to learn and do hard work.
        </h1>

        <div className="flex flex-col bg-[#F0F1F3] dark:bg-gray-800 p-8 rounded-lg z-10">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 justify-between">
            <div className="flex flex-col text-center md:text-left md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <Image
                src={PhotoProfile}
                alt="Raditya Firman S"
                className="rounded-full w-20 h-20 mr-0 lg:mr-8"
              />

              <div className="flex flex-col space-y-4 md:space-y-0 text-[#667085] dark:text-white">
                <p className="text-3xl font-semibold mb-5">About me 🚀</p>
                <p className=" text-lg leading-relaxed">
                  I'm a final year informatics engineering student at{" "}
                  <a
                    href="https://www.uns.ac.id/"
                    className="text-blue-400 hover:underline"
                  >
                    Universitas Sebelas Maret.
                  </a>{" "}
                  Currently Working as a Full Stack Developer at{" "}
                  <a
                    href="https://elnusa.co.id/"
                    className="text-blue-400 hover:underline"
                  >
                    PT. Elnusa Tbk
                  </a>
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                className="flex items-center justify-center border-2 border-black dark:border-white rounded-full w-12 h-12 "
                href="https://linkedin.com/in/radityafirmansyaputra"
                target="_blank"
              >
                <FaLinkedin className="dark:text-white w-6 h-6" />
              </a>
              <a
                className="flex items-center justify-center border-2 border-black dark:border-white rounded-full w-12 h-12 "
                href="https://instagram.com/sekutumu"
                target="_blank"
              >
                <FaInstagram className="dark:text-white w-6 h-6" />
              </a>
              <a
                className="flex items-center justify-center border-2 border-black dark:border-white rounded-full w-12 h-12 "
                href="https://instagram.com/sekutumu"
                target="_blank"
              >
                <FaGithub className="dark:text-white w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
