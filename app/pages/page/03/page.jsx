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
  //   src: "NBT-Chandrayaan3/assets/pages/y6xd9kgtgabbyyo7zupp.png",
  // });

  const imgURL1 = "/images/03.gif";

  // const textBg = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/bgImages/page5/wbsucpt9psrnckctmuxc.png",
  // });

  const textBg = "/images/page03/BG3.png";

  // const audioSrc = 'https://res.cloudinary.com/dydh2rfnk/video/upload/v1737548809/Page3_qbc5hm.mp3'
  const audioSrc = '/images/page03/Page3.mp3'

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  // Toggle text expansion
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

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

  // Navigate to next page
  const pageClickNextHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/04");
  };

  const pageClickPrevHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/02");
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
              <div className="cursor-pointer relative">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={textBg} // Dynamically set the background image
                    layout="fill"
                    objectFit="cover"
                    alt="Background Image"
                  />
                </div>
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
          {/* Main Content Container */}
          <div className="flex justify-center items-center min-h-[80vh]">
            <button className="bg-white rounded-full p-2 text-black" onClick={pageClickPrevHandler}>
              <ArrowLeft />
            </button>
            <div className="grid grid-cols-2 p-4">
              {/* Text Section */}
              <div className="cursor-pointer relative">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={textBg} // Dynamically set the background image
                    layout="fill"
                    objectFit="cover"
                    alt="Background Image"
                  />
                </div>
                <div className="relative z-10 bgText text-black">
                  <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                    <div
                      className={`xl:px-14 xl:py-12 sm:pr-0 sm:pl-6 sm:pt-2 sm:max-h-[270px] xl:max-h-[460px] md:pl-6 md:pt-2 md:pr-0 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                    >
                      <div
                        className={`pr-2 ${isExpanded ? "overflow-auto" : "overflow-hidden"
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
                    <AudioPlayer audio={audioSrc} />
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="cursor-pointer flex justify-center items-center">
                <div className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white" >
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
