import Image, { StaticImageData } from "next/image";
import { FaReact, FaHtml5, FaJava } from "react-icons/fa";

export default function Card({
  title,
  description,
  image,
  date,
  techStack,
}: Readonly<{
  image: string | StaticImageData;
  title: string;
  description?: string;
  date?: string;
  techStack?: string[];
}>) {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="bg-[#F0F1F3] dark:bg-gray-800 px-8 pt-8 rounded-lg w-full mb-8">
        <div className="flex gap-4 items-center mb-8">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>

        <Image src={image} alt="Project Image" className="w-full" />
      </div>

      {date && (
        <p className="text-gray-400 mb-4 text-muted mb-4 line-clamp-1">
          {date}
        </p>
      )}

      {title && (
        <h2 className="text-xl font-bold mb-4 w-80 max-h-14 text-ellipsis line-clamp-2 hover:line-clamp-none">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-gray-400 mb-4 text-muted mb-4 w-80 line-clamp-3 hover:line-clamp-none">
          {description}
        </p>
      )}

      {techStack && (
        <>
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
        </>
      )}
    </div>
  );
}
