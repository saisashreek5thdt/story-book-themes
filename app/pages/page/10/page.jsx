"use client";
import { useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
// import page1 from "./_components/page/page1Text"
import TranslateText from "../../../_components/page/api/translate3";


export default function Page1() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [handleLanguageChange, setHandleLanguageChange] = useState("en");
  const [isEnglish, setIsEnglish] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const imgURL1 = "/images/page10_11/image 2.jpg";




  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/11");
  };

  const handleLanguageSelection = (language, isEnglishFlag) => {
    setHandleLanguageChange(language);
    setIsEnglish(isEnglishFlag);
  };

  return (
    <>
      {/* Language Switcher */}
      <div className="absolute top-5 right-5">
        <div>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Change Language
          </button>
          {showDropdown && (
            <div className="mt-2 p-2 border rounded-md bg-white shadow-lg">
              <button
                onClick={() => handleLanguageSelection("en", true)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageSelection("te", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Telugu
              </button>
              <button
                onClick={() => handleLanguageSelection("ta", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Tamil
              </button>
              <button
                onClick={() => handleLanguageSelection("hi", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Hindi
              </button>
              <button
                onClick={() => handleLanguageSelection("mr", false)}
                className="block p-2 w-full text-left text-black hover:bg-gray-100"
              >
                Marathi
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full min-h-screen bg-cover select-none">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-0">
            {/* Text Section */}
            <div className="cursor-pointer">
              <div className="bg-white text-slate-700 shadow-md">
                <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[360px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] sm:p-0 md:p-6 xl:p-6 lg:p-6">
                  <div
                    className="flex items-center justify-center flex-col gap-3 text-justify font-medium text-sm sm:text-base lg:text-lg xl:text-xl"
                  >
                    <div
                      className={`pr-2 ${
                        isExpanded ? "overflow-auto" : "overflow-hidden"
                      }`}
                      style={{
                        maxHeight: "220px",
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
                    </div>
                    <button
                      onClick={toggleExpand}
                      className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  {/* AudioPlayer Component */}
                  <AudioPlayer />
                </div>
                
              </div>
            </div>

            {/* Image Section */}
            <div className="cursor-pointer flex justify-center items-center">
              <div
                className="rounded h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full max-w-[550px] xl:bg-white shadow-lg"
                onClick={pageClickHandler}
              >
                <Image
                  src={imgURL1}
                  className=" bg-white h-full w-full pt-0 xs:h-[100px] xs:w-[100px] sm:h-[380px] md:h-[360px] lg:h-[450px] xl:h-[500px] xl:w-[600px] object-cover"
                  alt="Cover Image"
                  width={800}
                  height={1400}
                  unoptimized
                />
                {isEnglish ? (
                  <div> Your English content is hare </div>
                ) : (
                  <TranslateText targetlanguage={handleLanguageChange} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
