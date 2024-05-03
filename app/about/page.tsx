import Image from "next/image";
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaHtml5,
  FaJava,
  FaReact,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import PhotoProfile from "../profile.png";
import OrnamentPolygon from "../ornament-polygon.svg";
import WorkExperience from "@/components/Home/WorkExperience";

export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col my-16">
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
                <FaLinkedin className="text-white w-6 h-6" />
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
      </section>

      <WorkExperience />

      <section className="relative overflow-hidden px-4 md:px-8 lg:px-16 xl:px-20 lg:min-h-screen flex flex-col my-16">
        <Image
          src={OrnamentPolygon}
          alt="Ornament Circle"
          className="absolute md:-right-40 bottom-0 md:top-0 z-0"
        />

        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 mb-4 text-center md:text-left">
          My <span className="text-white">Achievement</span>
        </h1>

        <p className="text-gray-400 text-mute mb-8 text-center md:text-left">
          Here is a list of my recent achievement
        </p>

        <ul className="flex flex-col space-y-8">
          <li className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <FaDiceOne className="text-white w-8 h-8" color="#61DAFB" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                1st Place Mobile App Competition
              </h2>
              <p className="text-gray-400 text-muted">
                Become the 1st place in Mobile App Competition at Magic Camp
                2023
                <br />
                Held by Himpunan Mahasiswa Manajemen Administrasi Universitas
                Sebelas Maret
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <FaDiceTwo className="text-white w-8 h-8" color="#61DAFB" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                Finalist Innovative Tech Competition
              </h2>
              <p className="text-gray-400 text-muted">
                Become the finalist in Innovative Tech Competition at Ifest Comp
                2022
                <br />
                Held by Himpunan Mahasiswa Informatika Universitas Padjajaran
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <FaDiceThree className="text-white w-8 h-8" color="#61DAFB" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                1st Place Business Plan Competition
              </h2>
              <p className="text-gray-400 text-muted">
                Become the 1st place in Business Plan Competition at Smart IT
                Fest 2022
                <br />
                Held by Himpunan Mahasiswa D3 Teknik Informatika Universitas
                Sebelas Maret
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <FaDiceFour className="text-white w-8 h-8" color="#61DAFB" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                2nd Place Web Development Competition
              </h2>
              <p className="text-gray-400 text-muted">
                Become the 2nd place in Web Development Competition at Smart
                Inotek Comp 2022
                <br />
                Held by Himpunan Mahasiswa D3 Teknik Informatika PSDKU
                Universitas Sebelas Maret
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="lg:min-h-screen px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center justify-center my-16">
        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-400 mb-4 text-center md:text-left">
          Tech <span className="text-white">Stack</span>
        </h1>

        <p className="text-gray-400 text-mute mb-8 text-center w-80">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>

        <h2 className="uppercase text-gray-400 text-muted mb-4 text-center md:text-left text-transparent font-medium bg-clip-text bg-gradient-to-b from-green-400 to-blue-500">
          Languages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaReact className="text-white w-8 h-8" color="#61DAFB" />
          </div>
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaHtml5 className="text-white w-8 h-8" color="#E34F26" />
          </div>
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaJava className="text-white w-8 h-8" color="#E34F26" />
          </div>
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaJava className="text-white w-8 h-8" color="#E34F26" />
          </div>
        </div>

        <h2 className="uppercase text-gray-400 text-muted mb-4 text-center md:text-left text-transparent font-medium bg-clip-text bg-gradient-to-b from-green-400 to-blue-500">
          Dev tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaReact className="text-white w-8 h-8" color="#61DAFB" />
          </div>
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaHtml5 className="text-white w-8 h-8" color="#E34F26" />
          </div>
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaJava className="text-white w-8 h-8" color="#E34F26" />
          </div>
          <div className="w-12 h-12 bg-[#292D35] rounded-full flex items-center justify-center">
            <FaJava className="text-white w-8 h-8" color="#E34F26" />
          </div>
        </div>
      </section>
    </main>
  );
}