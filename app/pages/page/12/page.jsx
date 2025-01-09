"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/13");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center sm:h-[400px] xs:w-[200px] sm:w-[400px]  xl:h-[530px] xl:w-[550px] justify-center">
                <div
                  className={`xl:px-14 xl:py-12 sm:pr-0 sm:pl-6 sm:pt-2  md:pl-6 md:pt-2 md:pr-0 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium `}
                >
                  <div
                    className={`pr-2 ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      maxHeight: "320px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                     <p>
                  Veer&apos;s mind wandered to something he suddenly remembered as
                  Dadaji spoke. He interrupted him.
                  </p>
                  <p className="py-4">
                  Veer - Dadaji, tell me who are &apos;Vikram&apos; and
              &apos;Pragyan&apos;? I heard something about them on T.V. Are they
              astronauts?
                  </p>
                  <p className="py-4">
                  Dadaji - &apos;Vikram&apos; is the name of the lander that has
              landed on the moon. &apos;Pragyan&apos; is the name of the rover
              that will explore and try to find answers to unexplored facts
              about the moon. The lander has been named &apos;Vikram&apos; in
              honour of our great scientist Dr. Vikram Sarabhai. He was the
              founding father of India&apos;s space programme.
                  </p>
                  <p className="py-2">
                  Veer - I will surely read this book which tells about Vikram
              Sarabhai.
                  </p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none"
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
          <div className="cursor-pointer flex justify-center items-center h-[520px] w-full md:w-[550px]">
            <div className="rounded h-full w-full" onClick={pageClickHander}>
              <Image
                src={imgURL1}
                className="bg-cover bg-white sm:h-[400px] sm:w-[450px] xl:h-[530px] xl:w-[550px]"
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