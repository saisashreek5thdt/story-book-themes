"use client";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";

export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/suuqij877k2egsskidti.png",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });
  const router = useRouter();
  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/09");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center h-[600px] w-[550px] justify-center">
                <div className="px-14 py-8 mt-6 text-xl text-justify font-medium">
                  <p>
                    Dadaji - Dadaji was expecting this question. He knew that
                    Veer wanted to get into the root of the matter. He was
                    prepared to answer.
                  </p>
                  <p className="py-1">
                    Dadaji - For over fourteen hundred years, cruel invaders
                    attacked our land, ruled it, and caused great harm. They
                    destroyed the famous universities of Nalanda, Takshashila,
                    and Vikramshila, where many of our precious texts were
                    kept. That is how we lost our ancient knowledge.
                  </p>
                  <p className="py-0">
                    Just imagine! Veer, the great mathematician Aryabhatt who
                    discovered 'zero' was an esteemed teacher at Nalanda
                    University. The Chinese scholar Hiuen Tsang studied at
                    Nalanda University and even became a teacher there, so
                    great was its name and fame.
                  </p>
                </div>
                <hr className="w-full mt-[5px] h-[2px] opacity-70 bg-gray-300" />
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer">
            <div className="rounded"onClick={pageClickHander}>
              <Image
                src={imgURL1}
                className="bg-cover h-[600px] w-[550px]"
                alt="Cover Image"
                width={800}
                height={1400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
