import Image from "next/image";
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import ProjectImage from "@/app/project_image.png";

export default function Project() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-20 lg:min-h-screen flex flex-col items-center my-16">
      <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 mb-4">
        Featured <span className="">Projects</span>
      </h1>

      <p className="text-gray-400 text-mute mb-8 text-center">
        Here are a few past design projects I've worked on. Want to see more?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-full flex flex-col justify-center">
          <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
            <div className="flex gap-4 items-center mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>

            <Image src={ProjectImage} alt="Project Image" className="w-full" />
          </div>

          <h2 className="text-xl font-bold mb-4">Project Title</h2>
          <p className="text-gray-400 mb-4 text-muted mb-4">
            Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
            eros, faucibus sit amet augue id, tempus pellentesque eros.
          </p>

          <h2 className="text-gray-400 text-muted mb-4">Tech Stack :</h2>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaReact className="w-8 h-8" color="#61DAFB" />
            </div>
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaHtml5 className="w-8 h-8" color="#E34F26" />
            </div>
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaJava className="w-8 h-8" color="#E34F26" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
            <div className="flex gap-4 items-center mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>

            <Image src={ProjectImage} alt="Project Image" className="w-full" />
          </div>

          <h2 className="text-xl font-bold mb-4">Project Title</h2>
          <p className="text-gray-400 mb-4 text-muted mb-4">
            Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
            eros, faucibus sit amet augue id, tempus pellentesque eros.
          </p>

          <h2 className="text-gray-400 text-muted mb-4">Tech Stack :</h2>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaReact className="w-8 h-8" color="#61DAFB" />
            </div>
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaHtml5 className=" w-8 h-8" color="#E34F26" />
            </div>
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaJava className=" w-8 h-8" color="#E34F26" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
            <div className="flex gap-4 items-center mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>

            <Image src={ProjectImage} alt="Project Image" className="w-full" />
          </div>

          <h2 className="text-xl font-bold mb-4">Project Title</h2>
          <p className="text-gray-400 mb-4 text-muted mb-4">
            Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
            eros, faucibus sit amet augue id, tempus pellentesque eros.
          </p>

          <h2 className="text-gray-400 text-muted mb-4">Tech Stack :</h2>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaReact className=" w-8 h-8" color="#61DAFB" />
            </div>
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaHtml5 className=" w-8 h-8" color="#E34F26" />
            </div>
            <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
              <FaJava className=" w-8 h-8" color="#E34F26" />
            </div>
          </div>
        </div>
      </div>

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