"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const imgURL1 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
  // });

  const imgURL1 = "/images/14.jpg";

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/15");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700 ">
              <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                <div
                  className={`xl:py-12 sm:pr-10 sm:max-h-[310px] md:max-h-[250px] lg:max-h-[280px] xl:max-h-[430px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium `}
                >
                  <div
                    className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      // maxHeight: "320px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                   <p>
                  Dadaji - Veer, first of all you should know that Chandrayaan is
                  the name of the Indian Lunar Exploration Program.
                  </p>
                  <p className="py-2">
                  India launched Chandrayaan 2 in 2019. The lander was on the right
              path, but unfortunately due to a small error, communication was
              lost in the final 300 meters, and it could not make a smooth
              landing on the surface of the moon. It crashed.
                  </p>
                  <p className="py-2">
                  Veer - Dadaji, tell me a story about space, the moon, and astronauts.
                  </p>
                  <p className="py-2">
                  Dadaji's eyes twinkle. He had been expecting this question from Veer for quite some time now. He knew about the forthcoming workshop in the boy's school, and had seen his excited preparations.
                  </p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none mb-10"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* <div className="-mt-2">
                  <Image
                    src={gifImgUrl}
                    alt="Astronaut Gif"
                    width={120}
                    height={120}
                    unoptimized
                  />
                </div> */}
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer flex justify-center items-center ">
            <div className="h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white" onClick={pageClickHander}>
              <Image
                src={imgURL1}
                className="bg-cover rounded-r-sm shadow-md bg-white h-full w-full object-cover"
                alt="Cover Image"
                width={800}
                height={1400}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}