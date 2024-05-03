import Image from "next/image";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour } from "react-icons/fa";
import OrnamentPolygon from "@/app/ornament-polygon.svg";

export default function Achievement() {
  return (
    <section className="lg:min-h-screen lg:justify-center relative overflow-hidden px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col my-16">
      <Image
        src={OrnamentPolygon}
        alt="Ornament Circle"
        className="absolute md:-right-40 bottom-0 md:top-0 z-0"
      />

      <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-500 mb-4 text-center md:text-left">
        My <span className="">Achievement</span>
      </h1>

      <p className="text-gray-400 text-mute mb-8 text-center md:text-left">
        Here is a list of my recent achievement
      </p>

      <ul className="flex flex-col space-y-8">
        <li className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
            <FaDiceOne className=" w-8 h-8" color="#61DAFB" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              1st Place Mobile App Competition
            </h2>
            <p className="text-gray-400 ">
              Become the 1st place in Mobile App Competition at Magic Camp 2023
              <br />
              Held by Himpunan Mahasiswa Manajemen Administrasi Universitas
              Sebelas Maret
            </p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
            <FaDiceTwo className=" w-8 h-8" color="#61DAFB" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              Finalist Innovative Tech Competition
            </h2>
            <p className="text-gray-400">
              Become the finalist in Innovative Tech Competition at Ifest Comp
              2022
              <br />
              Held by Himpunan Mahasiswa Informatika Universitas Padjajaran
            </p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
            <FaDiceThree className=" w-8 h-8" color="#61DAFB" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              1st Place Business Plan Competition
            </h2>
            <p className="text-gray-400 ">
              Become the 1st place in Business Plan Competition at Smart IT Fest
              2022
              <br />
              Held by Himpunan Mahasiswa D3 Teknik Informatika Universitas
              Sebelas Maret
            </p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#F0F1F3] dark:bg-gray-800 rounded-full flex items-center justify-center">
            <FaDiceFour className=" w-8 h-8" color="#61DAFB" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              2nd Place Web Development Competition
            </h2>
            <p className="text-gray-400 ">
              Become the 2nd place in Web Development Competition at Smart
              Inotek Comp 2022
              <br />
              Held by Himpunan Mahasiswa D3 Teknik Informatika PSDKU Universitas
              Sebelas Maret
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
