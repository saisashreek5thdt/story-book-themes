"use client";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/vfnq2jupoyu5jfligple",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/05");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center h-[530px] w-[550px] justify-center">
                <div className="px-14 py-12 mt-2 text-lg text-justify font-medium">
                  <p>Veer - Wow! Tell me quickly, Dadaji.</p>
                  <p className="py-4">
                    Dadaji - Once upon a time, a young princess wanted to go to
                    the moon.
                  </p>
                  <p className="py-4">
                    The king didn't know how to fulfill his daughter's foolish
                    wish. He promised a huge reward for anyone who would please
                    his daughter.
                  </p>
                  <p className="py-4">
                    Many courtiers came forward with various ideas but none
                    could please the princess.
                  </p>
                  <p className="py-4">
                    One day, a saint came and took the challenge. He asked the
                    king to bring his daughter before him.
                  </p>
                  <p className="py-4">
                    Saint - Tell me, little one, how big is the moon?
                  </p>
                  <p className="py-2">
                    Princess - It is as wide as my index finger.
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
                <hr className="w-full -mt-12 h-[2px] opacity-70 bg-gray-300" />
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer">
            <div onClick={pageClickHander} className="rounded">
              <Image
                src={imgURL1}
                className="bg-cover h-[530px] w-[550px]"
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
