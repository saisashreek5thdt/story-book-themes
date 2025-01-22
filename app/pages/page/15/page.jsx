"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";
import AudioPlayer from "../../../_components/AudioPlayer";
import { getCldImageUrl } from "next-cloudinary";
import LanguageSwitcher from "../../../_components/page/LanguageBox";
import TranslatteText from "../../../_components/page/api/TranslateText";
export default function Page1() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageContent, setPageContent] = useState(null); // Store fetched content
  const [targetLanguage, setTargetLanguage] = useState("en"); // Default language is English

  const router = useRouter();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug: "15" });
        console.log("Fetched data:", response); // Debugging
        setPageContent(response.page);
      } catch (error) {
        console.error("Error fetching page content:", error); // Debugging
      }
    };

    fetchContent();
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const pageClickHandler = (e) => {
    e.preventDefault();
    router.push("/pages/page/16"); // Navigate to the next page
  };

  const handleLanguageChange = (language, isEnglishFlag) => {
    setTargetLanguage(language); // Update target language when user selects a language
  };

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/ekb8fh7jbl4r5icaxeei",
  });

  return (
    <> {/* Language Switcher Component */}
      <LanguageSwitcher
        onLanguageChange={handleLanguageChange} // Update target language when user changes language
      />
      <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="grid grid-cols-2 p-4">
            {/* Text Section */}
            <div className="cursor-pointer">
              <div className="bg-white text-slate-700">
                <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                  <div
                    className={`xl:py-12 sm:pr-10 sm:max-h-[310px] md:max-h-[250px] lg:max-h-[280px] xl:max-h-[430px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium `}
                  >
                    <div
                      className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                        }`}
                      style={{
                        // maxHeight: "320px",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      {/* <p>Veer nodded as he gulped down the now cold milk.</p>
                    <p className="py-2">
                      He faintly remembered watching this news five years ago.
                    </p>
                    <p className="py-2">
                      Dadaji was surprised. How could Veer remember the event?
                      He was just five back then.
                    </p>
                    <p className="py-2">
                      Dadaji - Do you remember watching that landing of
                      Chandrayaan 2? Our Prime Minister Shri Narendra Modi was
                      also present in the operation control room to witness that
                      historic moment. We were all so touched when Modi ji
                      hugged and consoled the ISRO Chairman K Sivan and
                      encouraged him to try again.
                    </p>
                    <p className="py-2">
                      Veer - I can imagine how disappointing it must have been
                      for the whole team.
                    </p> */}
                      <div targetLanguage={targetLanguage} />
                      <TranslatteText
                        text={pageContent.content?.text} // Pass text to TranslationFunction component
                        targetLanguage={targetLanguage} // Pass selected language to translation function
                      />
                    </div>
                    <button
                      onClick={toggleExpand}
                      className=" text-blue-500 hover:text-blue-700 focus:outline-none mb-20"
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
              <div className="h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white" onClick={pageClickHandler}>
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
    </>
  );
}