"use client";
import { useState, useEffect } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import PortraitAudioPlayer from "../../../_components/PortraitAudioPlayer";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  // const imgURL1 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/pages/philu0rdlaeruw76llkg",
  // });

  const imgURL1 = "/images/23.jpg";

  // const textBg = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/pages/xwcnzt40a6evsm67z7s4",
  // });

  // const audioSrc = 'https://res.cloudinary.com/dydh2rfnk/video/upload/v1737550480/Page23_deyhc6.mp3'

  const audioSrc = '/images/page23/Page23.mp3';
  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  useEffect(() => {
    // Check for window object availability and set initial orientation
    if (typeof window !== "undefined") {
      setIsPortrait(window.innerHeight > window.innerWidth);

      const handleResize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickNextHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/24");
  };

  const pageClickPrevHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/22");
  };

  return (
    <div>
      {isPortrait ? (
        <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center ">
          {/* Main Content Container */}
          <div className="flex justify-center items-center">
            <div className="grid grid-rows-2">
              {/* Image Section */}
              <div className="cursor-pointer flex justify-center items-center">
                <div className="rounded -mt-16 h-[390px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[380px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:bg-white">
                  <Image
                    src={imgURL1}
                    className="bg-white h-full w-full object-cover"
                    alt="Cover Image"
                    width={800}
                    height={1400}
                    unoptimized
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="cursor-pointer relative bg-white">
                {/* <div className="absolute inset-0 z-0">
                  <Image
                    className="brightness-50"
                    src={imgURL1} // Dynamically set the background image
                    layout="fill"
                    objectFit="cover"
                    alt="Background Image"
                  />
                </div> */}
                <div className="relative z-10 bgText text-black">
                  <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[380px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                    <div
                      className={`xl:py-12 sm:pr-10 max-h-[290px] xl:max-h-[460px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                    >
                      <div
                        className={`pr-2 mt-1 mb-2 mx-4 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                          }`}
                        style={{
                          maxHeight: "250px",
                          transition: "max-height 0.3s ease",
                        }}
                      >
                        <p>
                          Dadaji - I also loved his speech when he said-
                          "Chandrayaan Maha Abhiyan is a success not only for India
                          but for the entire humanity."
                        </p>
                        <p className="py-2">
                          It shows the world that
                          India truly believes in Vasudhaiva Kutumbakam-meaning One
                          Earth, One Family, One Future.
                        </p>
                        <p className="py-2">
                          That was the theme of
                          India's G20 Presidency held in New Delhi in September 23.
                        </p>
                      </div>
                      <button
                        onClick={toggleExpand}
                        className="text-cyan-500 hover:text-cyan-700 focus:outline-none mb-6"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>

                    {/* Audio Player Section */}
                    <div className="flex justify-center items-center gap-3 mb-20">
                      <button className="bg-white rounded-full p-2 text-black" onClick={pageClickPrevHandler}>
                        <ArrowLeft />
                      </button>
                      <div className="sm:h-10 sm:mt-2 ">
                        <PortraitAudioPlayer audio={audioSrc} />
                      </div>
                      <button className="bg-white rounded-full p-2 text-black" onClick={pageClickNextHandler}>
                        <ArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
          <div className="flex justify-center items-center min-h-[80vh]">
            <button className="bg-white rounded-full p-2 text-black" onClick={pageClickPrevHandler}>
              <ArrowLeft />
            </button>
            <div className="grid grid-cols-2 p-4">
              {/* Text Section */}
              <div className="cursor-pointer relative bg-[#FADA7A]">
                {/* <div className="absolute inset-0 z-0">
                  <Image
                    className="brightness-50"
                    src={imgURL1} // Dynamically set the background image
                    layout="fill"
                    objectFit="cover"
                    alt="Background Image"
                  />
                </div> */}
                <div className="relative z-10 bgText text-black">
                  <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                    <div
                      className={`xl:py-12 sm:pr-10 sm:max-h-[310px] md:max-h-[250px] lg:max-h-[280px] xl:max-h-[430px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                    >
                      <div
                        className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                          }`}
                        style={{
                          // maxHeight: "320px",
                          transition: "max-height 0.3s ease",
                        }}
                      >
                        <p>
                          Dadaji - I also loved his speech when he said-
                          "Chandrayaan Maha Abhiyan is a success not only for India
                          but for the entire humanity."
                        </p>
                        <p className="py-2">
                          It shows the world that
                          India truly believes in Vasudhaiva Kutumbakam-meaning One
                          Earth, One Family, One Future.
                        </p>
                        <p className="py-2">
                          That was the theme of
                          India's G20 Presidency held in New Delhi in September 23.
                        </p>
                      </div>
                      <button
                        onClick={toggleExpand}
                        className=" text-black hover:text-slate-700 focus:outline-none mb-10"
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
                    <AudioPlayer audio={audioSrc} />
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="cursor-pointer flex justify-center items-center ">
                <div className=" h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white" >
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
            <button
              className="bg-white rounded-full p-2 text-black"
              onClick={pageClickNextHandler}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}