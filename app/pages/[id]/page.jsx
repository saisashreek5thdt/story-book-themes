"use client";

import { useEffect, useState } from "react";
import { getCldImageUrl } from "next-cloudinary";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
// import PortraitLayout from "../../../_components/PortraitLayout";
import PortraitAudioPlayer from "./PortraitAudioPlayer";
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";

export async function getStaticPaths() {
    const paths = Array.from({ length: 27 }, (_, i) => ({
        params: { id: (i + 1).toString() }, // Pages 1 to 27
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { id } = params;

    try {
        const response = await graphQLClient.request(GET_PAGE_BY_SLUG, {
            slug: id,
        });
        return {
            props: {
                pageData: response.page,
            },
        };
    } catch (error) {
        console.error("Error fetching page content:", error);
        return {
            props: {
                pageData: null,
            },
        };
    }
}

export default function Page({ pageData }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);
    //   const router = useRouter();
    //   const { id } = router.query;
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsPortrait(window.innerHeight > window.innerWidth);

            const handleResize = () => {
                setIsPortrait(window.innerHeight > window.innerWidth);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const toggleExpand = () => setIsExpanded((prev) => !prev);

    const handleNavigation = (direction) => {
        const currentId = parseInt(pageData.slug);
        const newId = direction === "next" ? currentId + 1 : currentId - 1;

        if (newId >= 1 && newId <= 27) {
            router.push(`/pages/${newId.toString().padStart(2, "0")}`);
        }
    };

    if (!pageData) {
        return <div>Content not available. Please try again later.</div>;
    }

    const imgURL = getCldImageUrl({ src: pageData.imageUrl });

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
                            <div className="cursor-pointer overflow-hidden">
                                <div className="bgText  text-black">
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
                                               <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: pageData.content.text,
                                                    }}
                                                />
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
                                            <button
                                                className="bg-white rounded-full p-2 text-black"
                                                onClick={() => handleNavigation("prev")}
                                            >
                                                <ArrowLeft />
                                            </button>
                                            <div className="sm:h-10 sm:mt-2 ">
                                                <PortraitAudioPlayer />
                                            </div>
                                            <button
                                                className="bg-white rounded-full p-2 text-black"
                                                onClick={() => handleNavigation("next")}
                                            ></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                //Portrait END
            ) : (
                <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center force-landscape">
                    <div className="flex justify-center items-center min-h-[80vh]">
                        <button
                            className="bg-white rounded-full p-2 text-black"
                            onClick={() => handleNavigation("prev")}
                        >
                            <ArrowLeft />
                        </button>

                        <div className="grid grid-cols-2 p-4">
                            {/* Text Section */}
                            <div className="cursor-pointer">
                                <div className="bgText text-black">
                                    <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] md:p-6 xl:p-6 lg:p-6">
                                        <div
                                            className={`xl:py-12 sm:pr-10 sm:max-h-[270px] xl:max-h-[460px] sm:pt-6 lg:pt-10 md:pt-10 md:pl-4 flex items-center justify-center flex-col gap-3 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-medium`}
                                        >
                                            <div
                                                className={`pr-2 sm:pl-8 sm:w-[300px] md:w-[310px] lg:w-[380px] xl:w-[440px] ${isExpanded ? "overflow-auto" : "overflow-hidden"
                                                    }`}
                                                style={{
                                                    maxHeight: "320px",
                                                    transition: "max-height 0.3s ease",
                                                }}
                                            >
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: pageData.content.text,
                                                    }}
                                                />
                                            </div>
                                            <button
                                                onClick={toggleExpand}
                                                className="text-black hover:text-cyan-700 focus:outline-none mb-10"
                                            >
                                                {isExpanded ? "Read Less" : "Read More"}
                                            </button>
                                        </div>

                                        {/* Audio Player Section */}
                                        <AudioPlayer />
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="cursor-pointer flex justify-center items-center">
                                <div className="rounded h-[300px] xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[310px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px] xl:bg-white">
                                    <Image
                                        src={imgURL}
                                        className="bg-white h-full w-full object-cover"
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
                            onClick={() => handleNavigation("next")}
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}