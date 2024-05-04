"use client";

import Image from "next/image";
import Card from "@/components/Card";
import OrnamentCircle from "@/app/ornament-circle2.svg";
import { FaSearch } from "react-icons/fa";
import ProjectImage from "@/app/project_image.png";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main className="lg:my-8 h-relative lg:min-h-screen">
      <section className="px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center my-16">
        <Image
          src={OrnamentCircle}
          alt="Project Image"
          className="absolute top-0 z-0"
          style={{ zIndex: -1 }}
        />

        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          Featured{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 ">
            Projects
          </span>
        </h1>

        <p className="text-gray-400 text-mute mb-8 text-center">
          Here are a few past design projects I've worked on. Want to see more?
        </p>

        <div className="flex justify-center w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search Project..."
            className="w-full p-4 bg-[#F0F1F3] dark:bg-gray-800 rounded-lg h-10 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg w-10 flex items-center justify-center">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center justify-center w-full h-8 gap-4 md:gap-8 mb-12">
          <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-0.5 mt-16">
            <div className="flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-full py-3 px-6">
              <a className="font-bold bg-clip-text text-center text-transparent bg-gradient-to-b from-green-400 to-blue-500 dark:text-white">
                Web Dev
              </a>
            </div>
          </div>

          <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-0.5 mt-16">
            <div className="flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-full py-3 px-6">
              <a className="font-bold bg-clip-text text-center text-transparent bg-gradient-to-b from-green-400 to-blue-500 dark:text-white">
                Android Dev
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center my-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <Card
            image={ProjectImage}
            title="Project Title"
            description="Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus eros, faucibus sit amet augue id, tempus pellentesque eros."
            techStack={["React", "HTML", "Java"]}
          />
          <Card
            image={ProjectImage}
            title="Project Title"
            description="Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus eros, faucibus sit amet augue id, tempus pellentesque eros."
            techStack={["React", "HTML", "Java"]}
          />
          <Card
            image={ProjectImage}
            title="Project Title"
            description="Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus eros, faucibus sit amet augue id, tempus pellentesque eros."
            techStack={["React", "HTML", "Java"]}
          />
          <Card
            image={ProjectImage}
            title="Project Title"
            description="Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus eros, faucibus sit amet augue id, tempus pellentesque eros."
            techStack={["React", "HTML", "Java"]}
          />
          <Card
            image={ProjectImage}
            title="Project Title"
            description="Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus eros, faucibus sit amet augue id, tempus pellentesque eros."
            techStack={["React", "HTML", "Java"]}
          />
        </motion.div>
      </section>
    </main>
  );
}
