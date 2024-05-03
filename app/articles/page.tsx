import Image from "next/image";
import OrnamentCircle from "@/app/ornament-circle2.svg";
import { FaSearch } from "react-icons/fa";
import { FaReact, FaHtml5, FaJava } from "react-icons/fa";
import ProjectImage from "@/app/project_image.png";

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
            Articles
          </span>
        </h1>

        <p className="text-gray-400 text-mute mb-8 text-center">
          Essays, learning, and other miscellaneous goodies.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 px-4 justify-center w-full md:w-1/2">
          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Search Project..."
              className="w-full p-4 bg-[#F0F1F3] dark:bg-gray-800 rounded-lg h-10 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg size-10 flex items-center justify-center md:mr-4">
              <FaSearch />
            </button>
          </div>

          <select className="bg-[#F0F1F3] dark:bg-gray-800 rounded-lg h-10 focus:outline-none px-4 py-2">
            <option value="all">Terbaru</option>
          </select>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="w-full flex flex-col justify-center">
            <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image
                src={ProjectImage}
                alt="Project Image"
                className="w-full"
              />
            </div>

            <p className="text-gray-400 mb-4 text-muted mb-4"> 2 days ago</p>
            <h2 className="text-xl font-bold mb-4">
              Cras risus eros, faucibus sit amet augue id, tempus
              pellentesque...
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image
                src={ProjectImage}
                alt="Project Image"
                className="w-full"
              />
            </div>

            <p className="text-gray-400 mb-4 text-muted mb-4"> 2 days ago</p>
            <h2 className="text-xl font-bold mb-4">
              Cras risus eros, faucibus sit amet augue id, tempus
              pellentesque...
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image
                src={ProjectImage}
                alt="Project Image"
                className="w-full"
              />
            </div>

            <p className="text-gray-400 mb-4 text-muted mb-4"> 2 days ago</p>
            <h2 className="text-xl font-bold mb-4">
              Cras risus eros, faucibus sit amet augue id, tempus
              pellentesque...
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image
                src={ProjectImage}
                alt="Project Image"
                className="w-full"
              />
            </div>

            <p className="text-gray-400 mb-4 text-muted mb-4"> 2 days ago</p>
            <h2 className="text-xl font-bold mb-4">
              Cras risus eros, faucibus sit amet augue id, tempus
              pellentesque...
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image
                src={ProjectImage}
                alt="Project Image"
                className="w-full"
              />
            </div>

            <p className="text-gray-400 mb-4 text-muted mb-4"> 2 days ago</p>
            <h2 className="text-xl font-bold mb-4">
              Cras risus eros, faucibus sit amet augue id, tempus
              pellentesque...
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
