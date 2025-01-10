"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/jwvbo0kh5u7i7ykbliqo.png",
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
    router.push("/pages/page/11");
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
                  className={`xl:px-14 xl:py-12 sm:pr-0 sm:pl-6 sm:pt-2 sm:max-h-[270px]  xl:max-h-[460px]  md:pl-6 md:pt-2 md:pr-0 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium `}
                >
                  <div
                    className={`pr-2 ${
                      isExpanded ? "overflow-auto" : "overflow-hidden"
                    }`}
                    style={{
                      // maxHeight: "320px",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                     <p>
                    Veer was amazed. But he felt that Dadaji had started talking
                    about something else now. Getting impatient, he gently
                    returned to the topic he wanted to discuss.
                  </p>
                  <p className="py-4">
                    Veer - OK. But now we have been a free nation for more than
                    75 years. What are we doing now?
                  </p>
                  <p className="py-2">
                    Dadaji - Yes. You are right. In the last ten years, India
                    has made great progress in space exploration. We have become
                    atmanirbhar (self-reliant) in all fields from sea to space
                    and talent to technology. India now holds the world record
                    for sending 104 satellites in just one day!
                  </p>
                    {/* <p>
                    Veer - I know. I saw the satellites video on YouTube. It was
                    so interesting. Tell me Dadaji, what is so special about
                    Chandrayaan 3?
                  </p>
                  <p className="py-1">
                    Dadaji - You have asked a very good question. I will explain
                    in detail. Just then, Veer’s mother entered the room with a
                    tray with two glasses of hot milk for both of them. Dadaji
                    took a sip.
                  </p>
                  <p className="py-1">
                    Veer adjusted his pillow to be even more comfortable. The
                    milk was too hot for him. He would wait a bit to drink it.
                  </p>
                  <p className="py-1">
                    Dadaji - The landing of Chandrayaan 3 is a matter of great
                    pride for us because India is the first country to
                    successfully land on the south pole of the moon. Our
                    scientists have achieved it at a very low cost of 620
                    million dollars which is almost half the cost of a
                    Hollywood movie.
                  </p> */}
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