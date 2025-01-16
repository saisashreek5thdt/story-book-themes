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

  const router = useRouter();

  // Toggle text expansion
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Navigate to next page
  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/04");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
      {/* Main Content Container */}
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                <div
                  className={`xl:px-14 xl:py-12 sm:pr-0 sm:pl-6 sm:pt-2 sm:max-h-[270px] xl:max-h-[460px] md:pl-6 md:pt-2 md:pr-0 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                >
                  <div
                    className={`pr-2 ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p>
                      Dadaji - What is so special about the moon today? Veer -
                      Dadaji, this morning while cleaning my room, I saw the
                      picture of a spacecraft on the moon on the front page of a
                      newspaper.
                    </p>
                    <p className="xl:py-4">
                      There were also pictures of people celebrating. I want to
                      know why this news was so important that day.
                    </p>
                    <p className="xl:py-4">
                      Dadaji - Veer, it was a very great day in the history of
                      Space research, as well as for India. Modiji has rightly
                      named 23 August as National Space Day. But first, let me
                      tell you a small story about the moon which I heard from
                      my grandmother when I was young.
                    </p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>

                {/* Audio Player Component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer flex justify-center items-center">
            <div className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white" onClick={pageClickHandler}>
              <Image
                src={imgURL1}
                className="bg-cover bg-white h-full w-full object-cover "
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
