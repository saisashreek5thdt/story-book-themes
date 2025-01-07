"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/dutpnurbiui06mdjay4d",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const router = useRouter();

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/04");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center h-[530px] w-[550px] justify-center ">
                <div className={`px-14 py-12 flex items-center justify-center flex-col gap-3 text-xl text-justify font-medium `}>
                <div
                  className={`pr-2 ${
                    isExpanded ? "overflow-auto" : "overflow-hidden"
                  }`}
                  style={{
                    maxHeight:"330px",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p>Dadaji - What is so special about the moon today?</p>
                  <p className="py-4">
                    Veer - Dadaji, this morning while cleaning my room, I saw
                    the picture of a spacecraft on the moon on the front page of
                    a newspaper.
                  </p>
                  <p className="py-4">
                    There were also pictures of people celebrating. I want to
                    know why this news was so important that day
                  </p>
                  <p className="py-4">
                    Dadaji - Veer, it was a very great day in the history of
                    Space research, as well as for India. Modiji has rightly
                    named 23 August as National Space Day.
                  </p>
                  <p className="py-4">
                    But first let me tell you a small story about the moon which
                    I heard from my grandmother when I was young.
                  </p>

                  {/* <div className="py-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                    />
                  </div> */}
                  </div>
                  <button
                    onClick={toggleExpand}
                    className=" text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer flex justify-center items-center h-[530px] w-full md:w-[550px]">
            <div onClick={pageClickHander} className="rounded h-full w-full">
              <Image
                src={imgURL1}


                className="bg-white h-full w-full object-cover"

                alt="Cover Image"
                width={400}
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
