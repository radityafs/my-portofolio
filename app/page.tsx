import Image from "next/image";
import PhotoProfile from "./profile.png";
import OrnamentCircle from "./ornament-circle.svg";
import ProjectImage from "./project_image.png";

import {
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="lg:my-8">
      <section className="px-4 md:px-8 lg:px-16 xl:px-20 relative lg:min-h-screen flex items-center my-16">
        <Image
          src={OrnamentCircle}
          alt="Ornament Circle"
          className="absolute right-0 top-20 z-0"
        />
        <div className="flex w-full flex-col justify-center space-y-16 z-10">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold leading-tight">
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

          <div className="flex flex-col bg-gray-800 p-8 rounded-lg z-10">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 justify-between">
              <div className="flex flex-col text-center md:text-left md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <Image
                  src={PhotoProfile}
                  alt="Raditya Firman S"
                  className="rounded-full w-20 h-20 mr-0 lg:mr-8"
                />

                <div className="flex flex-col space-y-4 md:space-y-0">
                  <p className="text-3xl font-semibold text-white mb-5">
                    About me 🚀
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    I'm a final year informatics engineering student at{" "}
                    <a
                      href="https://www.its.ac.id/"
                      className="text-blue-400 hover:underline"
                    >
                      Universitas Sebelas Maret.
                    </a>
                    <br />
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
                  className="flex items-center justify-center border-2 border-white rounded-full w-12 h-12 "
                  href="https://linkedin.com/in/radityafirmansyaputra"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-white w-6 h-6" />
                </a>
                <a
                  className="flex items-center justify-center border-2 border-white rounded-full w-12 h-12 "
                  href="https://instagram.com/sekutumu"
                  target="_blank"
                >
                  <FaInstagram className="text-white w-6 h-6" />
                </a>
                <a
                  className="flex items-center justify-center border-2 border-white rounded-full w-12 h-12 "
                  href="https://instagram.com/sekutumu"
                  target="_blank"
                >
                  <FaGithub className="text-white w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 xl:px-20 lg:min-h-screen flex flex-col items-center my-16">
        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 mb-4">
          Featured <span className="text-white">Projects</span>
        </h1>

        <p className="text-gray-400 text-mute mb-8 text-center">
          Here are a few past design projects I've worked on. Want to see more?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full flex flex-col justify-center">
            <div className="bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image src={ProjectImage} alt="Project Image" />
            </div>

            <h2 className="text-xl font-bold mb-4">Project Title</h2>
            <p className="text-gray-400 mb-4 text-muted mb-4">
              Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
              eros, faucibus sit amet augue id, tempus pellentesque eros.
            </p>

            <h2 className="text-gray-400 text-muted mb-4">Tech Stack :</h2>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaReact className="text-white w-8 h-8" color="#61DAFB" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaHtml5 className="text-white w-8 h-8" color="#E34F26" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaJava className="text-white w-8 h-8" color="#E34F26" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image src={ProjectImage} alt="Project Image" />
            </div>

            <h2 className="text-xl font-bold mb-4">Project Title</h2>
            <p className="text-gray-400 mb-4 text-muted mb-4">
              Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
              eros, faucibus sit amet augue id, tempus pellentesque eros.
            </p>

            <h2 className="text-gray-400 text-muted mb-4">Tech Stack :</h2>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaReact className="text-white w-8 h-8" color="#61DAFB" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaHtml5 className="text-white w-8 h-8" color="#E34F26" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaJava className="text-white w-8 h-8" color="#E34F26" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
              <div className="flex gap-4 items-center mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>

              <Image src={ProjectImage} alt="Project Image" />
            </div>

            <h2 className="text-xl font-bold mb-4">Project Title</h2>
            <p className="text-gray-400 mb-4 text-muted mb-4">
              Pellentesque suscipit fringilla libero eu ullamcorper. Cras risus
              eros, faucibus sit amet augue id, tempus pellentesque eros.
            </p>

            <h2 className="text-gray-400 text-muted mb-4">Tech Stack :</h2>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaReact className="text-white w-8 h-8" color="#61DAFB" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaHtml5 className="text-white w-8 h-8" color="#E34F26" />
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <FaJava className="text-white w-8 h-8" color="#E34F26" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-0.5 mt-16">
          <div className="flex h-full w-full items-center justify-center bg-black rounded-full py-3 px-6">
            <a className="text-white font-bold">See More Projects</a>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center">
        <div className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-sm lg:rounded-lg flex flex-col justify-center items-center py-10">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Let's <span className="text-white">Work Together</span>
          </h1>
          <p className="text-muted text-center mb-8">
            Interested in collaborating with me? We should queue up a time to
            chat. I’ll buy the coffee.
          </p>

          <a className="bg-white text-black px-8 py-4 rounded-full">
            Contact Me
          </a>
        </div>
      </section>

      <section className="lg:min-h-screen px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center justify-center my-16">
        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-400 mb-4 text-center md:text-left">
          Testimonials
        </h1>

        <p className="text-gray-400 text-mute mb-8 text-center w-80">
          People I've worked with have said some nice things...
        </p>

        <Image
          src={PhotoProfile}
          alt="Profile Image"
          className="rounded-full w-20 h-20 mb-4"
        />

        <p className="text-white text-lg text-center mb-4 w-1/2">
          "Raditya is a great developer. He has a good understanding of the
          project and always delivers on time."
        </p>

        <h2 className="text-xl font-bold">John Doe</h2>
        <p className="text-gray-400 text-muted">CEO of Company</p>

        <div className="flex space-x-4 mt-12">
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
        </div>
      </section>
    </main>
  );
}
