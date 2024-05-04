"use client";

import Image from "next/image";
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import ProjectImage from "@/app/project_image.png";
import { motion } from "framer-motion";
import Card from "../Card";

export default function Project() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-20 lg:min-h-screen flex flex-col items-center my-16">
      <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 mb-4">
        Featured <span className="">Projects</span>
      </h1>

      <p className="text-gray-400 text-mute mb-8 text-center">
        Here are a few past design projects I've worked on. Want to see more?
      </p>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      </motion.div>

      <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-0.5 mt-16">
        <div className="flex h-full w-full items-center justify-center bg-white dark:bg-black rounded-full py-3 px-6">
          <a className=" font-bold" href="/projects">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
